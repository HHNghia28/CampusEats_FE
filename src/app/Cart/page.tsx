'use client';
// import React from 'react';
import ButtonBase from '@/components/Buttons/Button';
import CartItem from '@/components/CartItem/CartItem';
import { Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './Cart.module.scss';
import Modal from 'react-bootstrap/Modal';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
/*
  Page: Cart
  Author: QuyenNNM
*/
const Cart = () => {
  const [total, setTotal] = useState(3);
  const updateTotal = (quantity: number) => {
    setTotal(prevTotal => prevTotal + quantity);
  };
  return (
    <Fragment>
      <h1 className={cx('d-flex', 'align-items-center', 'justify-content-center')}>
        Cart
      </h1>
      <CartItem updateTotal={updateTotal} />
      {<br />}
      <CartItem updateTotal={updateTotal} />
      {<br />}
      <CartItem updateTotal={updateTotal} />
      <Row>
        <Col md={3}></Col>
        <Col
          md={6}
          className={cx('d-flex', 'justify-content-center')}
        >
          <h4>Total: </h4>
        </Col>
        <Col
          md={3}
          className={cx('d-flex', 'align-items-center', 'justify-content-center')}
        >
          <div className={cx('d-flex', 'justify-content-end')}>
            <h4>{total}</h4>
          </div>
        </Col>
      </Row>
      <Row className={cx('justify-content-center')}>
        <Col
          xs='auto'
          className={cx('m-4')}
        >
          <ButtonBase
            type='button'
            title='Order'
            variant='main-color'
            size='md'
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Cart;
