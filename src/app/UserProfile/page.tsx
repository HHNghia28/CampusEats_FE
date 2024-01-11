'use client';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

import { getOrderByCustomerId } from '@/api/OrderAPI';
import ButtonBase from '@/components/Buttons/Button';
import Loading from '@/components/Loading/loading';
import styles from './userProfile.module.scss';
const cx = classNames.bind(styles);

const UserProfile = () => {
  const [orders, setOrders] = useState<OrderDTO[]>();
  const [customer, setCustomer] = useState<CustomerDTO | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCustomer = localStorage.getItem('account');
      if (storedCustomer) {
        setCustomer(JSON.parse(storedCustomer));
      } else {
        router.push('/Login');
      }
    }
  }, []);

  const {
    isPending,
    isError,
    data: results,
    error
  } = useQuery({
    queryKey: ['userProfile', customer?.id],
    queryFn: async () => {
      const data = await getOrderByCustomerId(customer?.id ? customer?.id + '' : '');
      return data;
    }
  });

  if (!isPending && results?.data !== undefined && results?.data !== orders) {
    let temp: OrderDTO[] = results.data;

    temp.forEach(item => {
      let totalPrice = 0;

      if (item.details && item.details.length > 0) {
        totalPrice = item.details.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.price * currentItem.quantity;
        }, 0);
      }

      item.totalPrice = totalPrice;
    });

    setOrders(temp);
  }

  const formatPrice = (number: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(number);
  };

  const handleClickRow = (id: string) => {
    router.push('/OrderHistory/' + id);
  };

  // const handleToggleOrders = () => {
  //   setOrders(!orders);
  // };

  return (
    <Container>
      <div className={cx('user-Info')}>
        <div>
          <h2>Thông tin khách hàng</h2>
        </div>
        <div className={cx('info-frame')}>
          <Row className='d-flex navbar-brand'>
            <Col md={12}>
              <p>
                <strong>Họ và Tên:</strong> {customer?.name}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {customer?.contactNumber}
              </p>
              <p>
                <strong>Địa chỉ:</strong> {customer?.address}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx('order-History', 'col-12')}>
        <h2 className='title '>Lịch sử mua hàng</h2>
        {isPending ? (
          <Loading />
        ) : orders && orders.length > 0 ? (
          <Table
            striped
            bordered
            hover
            size='sm'
          >
            <thead>
              <tr>
                <th>Mã đơn</th>
                {/* <th>Ngày đặt</th> */}
                <th>Trạng thái</th>
                <th>Tổng giá</th>
                <th>Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(item => (
                <tr>
                  <td>{item.code}</td>
                  {/* <td>{item.}</td> */}
                  <td>{item?.status === 'PAID' ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                  <td>{formatPrice(item.totalPrice ? item.totalPrice : 0)}</td>
                  <td>
                    <ButtonBase
                      type='button'
                      title='Chi tiết'
                      variant='main-color'
                      size='md'
                      onClick={() => {
                        router.push(item.id ? '/OrderHistory/' + item.id : '');
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Bạn không có đơn hàng nào</p>
        )}
        {/* {orders.length > 2 && (
          <div className={cx('button-group')}>
            <ButtonBase
              type='button'
              title={allOrders ? 'Show Less' : 'Show All'}
              variant={allOrders ? 'secondary' : 'main'}
              size='md'
              onClick={handleToggleOrders}
            />
          </div>
        )} */}
      </div>
    </Container>
  );
};

export default UserProfile;
