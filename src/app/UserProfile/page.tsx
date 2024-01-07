'use client';
import ButtonBase from '@/components/Buttons/Button';
import OrderItem from '@/components/OrderItem/OrderItem';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './userProfile.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getOrderByCustomerId } from '@/api/OrderAPI';
import Loading from '@/components/Loading/loading';
import Link from 'next/link';
const cx = classNames.bind(styles);

const UserProfile = () => {
  const [orders, setOrders] = useState<OrderDTO[]>();

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
          <h2 className='title'>User Information</h2>
        </div>
        <div className={cx('info-frame')}>
          <Row className='d-flex align-items-center'>
            <Col
              md={6}
              className='left-details'
            >
              <p>
                <strong>Name:</strong> {orders ? orders[0].receiver : ''}
              </p>
              <p>
                <strong>Address:</strong> {orders ? orders[0].address : ''}
              </p>
            </Col>
            <Col
              md={6}
              className='right-details text-right'
            >
              <p>
                <strong>Phone Number:</strong> {orders ? orders[0].contactNumber : ''}
              </p>
              {/* <p>
                <strong>Email:</strong> {user.email}
              </p> */}
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx('order-History')}>
        <h2 className='title '>Order History</h2>
        {isPending ? (
          <Loading />
        ) : orders && orders.length > 0 ? (
          orders.map(item => (
            <div
              key={item.orderId}
              className={cx('order-frame')}
            >
              <Link href={`/OrderHistory/${item.id}`}>
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
