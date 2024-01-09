'use client';
import ButtonBase from '@/components/Buttons/Button';
import OrderItem from '@/components/OrderItem/OrderItem';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './userProfile.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getOrderByCustomerId } from '@/api/OrderAPI';
import Loading from '@/components/Loading/loading';
import Link from 'next/link';
const cx = classNames.bind(styles);

const UserProfile = () => {
  const [orders, setOrders] = useState<OrderDTO[]>();
  const [customer, setCustomer] = useState<CustomerDTO | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCustomer = localStorage.getItem('account');
      if (storedCustomer) {
        setCustomer(JSON.parse(storedCustomer));
      }
    }
  }, []);

  const {
    isPending,
    isError,
    data: results,
    error
  } = useQuery({
    queryKey: ['userProfile', '420292'],
    queryFn: async () => {
      const data = await getOrderByCustomerId('420292');
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
            <Col md={6}>
              <p>
                <strong>Họ và Tên:</strong> {customer?.name}
              </p>
              <p>
                <strong>Địa chỉ:</strong> {customer?.address}
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Số điện thoại:</strong> {customer?.contactNumber}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx('order-History')}>
        <h2 className='title '>Lịch sử mua hàng</h2>
        {isPending ? (
          <Loading />
        ) : orders && orders.length > 0 ? (
          orders.map(item => (
            <div
              key={item.orderId}
              className={cx('order-frame')}
            >
              <Link
                className='navbar-brand'
                href={`/OrderHistory/${item.id}`}
              >
                <OrderItem {...item} />
              </Link>
            </div>
          ))
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
