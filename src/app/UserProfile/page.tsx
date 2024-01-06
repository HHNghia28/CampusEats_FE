'use client';
import ButtonBase from '@/components/Buttons/Button';
import OrderItem from '@/components/OrderItem/OrderItem';
import classNames from 'classnames/bind';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './userProfile.module.scss';
const cx = classNames.bind(styles);

const UserProfile = () => {
  const user = {
    name: 'Le Van User1',
    address: 'Ninh Kieu, Can Tho',
    phone: '0123456789',
    email: 'user1@gmail.com'
  };

  const orders = [
    {
      orderId: 'ce00001',
      total: '50.000 Vnđ',
      address: 'Thoi Binh, Ca Mau',
      date: '06-01-2024',
      status: 'Delivered'
    },
    {
      orderId: 'ce00002',
      total: '60.000 Vnđ',
      address: 'Thoi Binh, Ca Mau',
      date: '01-01-2024',
      status: 'Cancel'
    },
    {
      orderId: 'ce00003',
      total: '70.000 Vnđ',
      address: 'Thoi Binh, Ca Mau',
      date: '02-01-2024',
      status: 'Delivered'
    },
    {
      orderId: 'ce00004',
      total: '80.000 Vnđ',
      address: 'Thoi Binh, Ca Mau',
      date: '05-01-2024',
      status: 'Complete'
    }
  ];

  const [allOrders, setAllOrders] = React.useState(false);

  const handleToggleOrders = () => {
    setAllOrders(!allOrders);
  };

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
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
            </Col>
            <Col
              md={6}
              className='right-details text-right'
            >
              <p>
                <strong>Phone Number:</strong> {user.phone}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx('order-History')}>
        <h2 className='title '>Order History</h2>
        {orders.slice(0, allOrders ? orders.length : 2).map(order => (
          <div
            key={order.orderId}
            className={cx('order-frame')}
          >
            <OrderItem order={order} />
          </div>
        ))}
        {orders.length > 2 && (
          <div className={cx('button-group')}>
            <ButtonBase
              type='button'
              title={allOrders ? 'Show Less' : 'Show All'}
              variant={allOrders ? 'secondary' : 'main'}
              size='md'
              onClick={handleToggleOrders}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default UserProfile;
