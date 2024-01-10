'use client';
import classNames from 'classnames/bind';
import { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './Paying.module.scss';

import ButtonBase from '@/components/Buttons/Button';
import PayingItem from '@/components/PayingItem/PayingItem';
import { loginAPI } from '@/api/AuthAPI';
import { useMutation, useQuery } from '@tanstack/react-query';
import { addOrder } from '@/api/OrderAPI';
import { toast } from 'react-toastify';

const divStyle = {
  backgroundColor: '#DCDCDC',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px'
};
const cx = classNames.bind(styles);
const Paying = () => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState<OrderDetailDTO[]>();
  const [customer, setCustomer] = useState<CustomerDTO | null>(null);
  const [isPay, setIsPay] = useState(false);

  const handleCheckboxPayChange = () => {
    setIsPay(!isPay);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart: OrderDetailDTO[] = JSON.parse(localStorage.getItem('cart') || '[]');

      let totalPrice = 0;

      if (cart && cart.length > 0) {
        totalPrice = cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.price * currentItem.quantity;
        }, 0);
      }

      setTotal(totalPrice);
      setCart(cart);

      const storedCustomer = localStorage.getItem('account');
      if (storedCustomer) {
        setCustomer(JSON.parse(storedCustomer));
      }
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
        locationName: customer?.locationName
          ? customer.locationName
          : 'An Bình, Ninh Kiều, Cần Thơ',
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
    window.location.href = 'http://localhost:3000/Cart';
  };
  return (
    <Fragment>
      <div style={divStyle}>
        <p>Name: {customer?.name}</p>
        <p>Sdt: {customer?.contactNumber}</p>
        <p>D/c: {customer?.address}</p>
      </div>
      <div>
        <h1 className={cx('d-flex', 'align-items-center', 'justify-content-center')}>
          Paying
        </h1>
        <Row
          className={cx('d-flex', 'align-items-center', 'justify-content-between', 'm-3')}
        >
          <Col
            md={3}
            className={cx(
              'text-start',
              'd-flex',
              'align-items-center',
              'justify-content-center'
            )}
          >
            <h4>Order Information</h4>
          </Col>
          <Col md={6}></Col>
          <Col
            md={3}
            className={cx(
              'text-end',
              'd-flex',
              'align-items-center',
              'justify-content-center'
            )}
          >
            <h4>Add more</h4>
          </Col>
        </Row>
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
        <h4>Note order</h4>
      </Col>
      <hr />
      <Row className={cx('p-t-22')}>
        <Col md={3}></Col>
        <Col
          md={6}
          className={cx('d-flex', 'justify-content-center')}
        >
          <h4>Total: </h4>
        </Col>
        <Col
          md={3}
          className={cx('d-flex', 'justify-content-center', 'align-items-center')}
        >
          <div className={cx('d-flex', 'justify-content-end')}>
            <h4>{total}</h4>
          </div>
        </Col>
      </Row>
      <div>
      <label>
        <input 
          type="checkbox" 
          checked={isPay} 
          onChange={handleCheckboxPayChange} 
        />
        Thanh toán online
      </label>
      {isPay && <p>Bạn đã chọn thanh toán online.</p>}
    </div>
      <Row
        className={cx(
          'd-flex',
          'align-items-center',
          'justify-content-between',
          'p-t-22'
        )}
      >
        <Col className={cx('text-start')}>
          <ButtonBase
            type='button'
            title='Back'
            variant='main-color'
            size='md'
            onClick={handleBackClick}
          />
        </Col>
        <Col className={cx('text-end')}>
          <ButtonBase
            type='button'
            title='Paying'
            variant='main-color'
            size='md'
            onClick={handlePayingClick}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Paying;
