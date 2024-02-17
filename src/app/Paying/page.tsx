'use client';
import { useMutation } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { addOrder } from '@/api/OrderAPI';
import ButtonBase from '@/components/Buttons/Button';
import PayingItem from '@/components/PayingItem/PayingItem';
import styles from './Paying.module.scss';

// const divStyle = {
//   backgroundColor: '#DCDCDC',
//   borderRadius: '8px',
//   padding: '10px',
// };
const cx = classNames.bind(styles);
const Paying = () => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState<OrderDetailDTO[]>();
  const [customer, setCustomer] = useState<CustomerDTO | null>(null);
  const [isPay, setIsPay] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState<Date>();
  const [note, setNote] = useState<string>();

  useEffect(() => {
    console.log(appointmentDate);
  }, [appointmentDate]);

  const router = useRouter();

  const handleCheckboxPayChange = () => {
    setIsPay(!isPay);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCustomer = localStorage.getItem('account');
      if (storedCustomer) {
        setCustomer(JSON.parse(storedCustomer));
      } else {
        router.push('/Login');
      }

      const cart: OrderDetailDTO[] = JSON.parse(localStorage.getItem('cart') || '[]');

      let totalPrice = 0;

      if (cart && cart.length > 0) {
        totalPrice = cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.price * currentItem.quantity;
        }, 0);
      }

      setTotal(totalPrice);
      setCart(cart);
    }
  }, []);

  const mutationAddOrder = useMutation({
    mutationFn: (order: OrderDTO) => {
      return addOrder(order);
    },
    onSuccess: (data, variables, context) => {
      if (data?.data?.paymentUrl) {
        window.location.href = data.data.paymentUrl;
      } else {
        toast.error(data.message);
      }
    }
  });

  const handlePayingClick = () => {
    if (customer != null) {
      const order: OrderDTO = {
        branchId: 6183,
        customerId: customer?.id,
        receiver: customer?.name,
        contactNumber: customer?.contactNumber,
        address: customer?.address,
        isPay: isPay,
        locationName: customer?.locationName
          ? customer.locationName
          : 'An Bình, Ninh Kiều, Cần Thơ',
          appointmentDate: appointmentDate,
          note: note,
        details: cart
      };

      mutationAddOrder.mutate(order);
    }

    // const order: OrderDTO = {
    //   branchId: 6183,
    //   customerId: 420292,
    //   receiver: 'Lê Văn CampusEats',
    //   contactNumber: '0832474699',
    //   address: '600 Nguyễn Văn Cừ Nối Dài',
    //   locationName: 'An Bình, Ninh Kiều, Cần Thơ',
    //   isPay: isPay,
    //   details: cart
    // };

    // mutationAddOrder.mutate(order);
  };

  const updateTotal = (quantity: number) => {
    setTotal(prevTotal => prevTotal + quantity);
  };

  const handleBackClick = () => {
    console.log('Button Clicked!');
    router.push('/Cart');
  };

  const formatPrice = (number: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(number);
  };
  return (
    <div className={cx('background-color')}>
      <div className={cx('container')}>
        <div className={cx('h-30')}></div>
        <Fragment>
          <div className={cx('col-md-12', 'card-info', 'border', 'rounded')}>
            <p className={cx('font-arial', 'f-bold')}>Họ và tên: {customer?.name}</p>
            <p className={cx('font-arial', 'f-bold')}>
              Số điện thoại: {customer?.contactNumber}
            </p>
            <p className={cx('font-arial', 'f-bold')}>Địa chỉ: {customer?.address}</p>
            <div className={cx('d-flex', 'align-items-center')}>
            <p className={cx('f-bold', 'align-items-center')}>Lịch hẹn: </p>
            <input
              type='datetime-local'
              name=''
              id=''
              value={appointmentDate ? appointmentDate.toISOString().slice(0, -8) : ''}
              onChange={e => setAppointmentDate(new Date(e.target.value))}
            />
      </div>
          </div>
          <div>
            <h1
              className={cx(
                'd-flex',
                'align-items-center',
                'justify-content-center',
                'font-arial',
                'mt-4',
                'fs-xxl',
                'f-bold',
                'mb-3',
                'text-title-color'
              )}
            >
              Thanh toán
            </h1>
          </div>
          {cart?.map((item, index) => (
            <Fragment key={index}>
              <PayingItem
                imageUrl={item.images ? item.images[0] : ''}
                name={item.fullName ? item.fullName : ''}
                price={item.price}
                productId={item.productId}
                quantity={item.quantity}
              />
              <br />
            </Fragment>
          ))}
          <Col className={cx('text-start', 'p-t-22')}>
            <h4 className={cx('font-arial', 'f-bold')}>Ghi chú:</h4>
            <input type="text" value={note} onChange={e => setNote(e.target.value)} />
          </Col>
          <hr />
          <Row className={cx('p-t-22')}>
            <Col md={6}></Col>
            <Col
              md={6}
              className={cx('d-flex', 'justify-content-center')}
            >
              <h4 className={cx('text-end', 'col-12', 'font-arial', 'f-bold')}>
                Tổng thanh toán: {formatPrice(total)}
              </h4>
            </Col>
          </Row>
          <div>
            <label>
              <input
                type='checkbox'
                checked={isPay}
                onChange={handleCheckboxPayChange}
                className={cx('mr-10', 'font-arial')}
              />
              Thanh toán online
            </label>
            {isPay && (
              <p className={cx('font-arial', 'f-bold', 'fs-lg')}>
                Bạn đã chọn thanh toán online.
              </p>
            )}
          </div>
          <Row
            className={cx(
              'd-flex',
              'align-items-center',
              'justify-content-between',
              'p-t-22',
              'p-2'
            )}
          >
            <Col className={cx('text-start', 'f-bold', 'mb-3')}>
              <ButtonBase
                type='button'
                title='Quay lại'
                variant='main-color'
                size='md'
                onClick={handleBackClick}
              />
            </Col>
            <Col className={cx('text-end', 'f-bold', 'mb-3')}>
              <ButtonBase
                type='button'
                title='Đặt hàng'
                variant='main-color'
                size='md'
                onClick={handlePayingClick}
              />
            </Col>
          </Row>
        </Fragment>
      </div>
    </div>
  );
};

export default Paying;
