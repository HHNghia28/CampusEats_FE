'use client';
// import React from 'react';
import ButtonBase from '@/components/Buttons/Button';
import CartItem from '@/components/CartItem/CartItem';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

/*
  Page: Cart
  Author: QuyenNNM
*/
const Cart = () => {
  const [total, setTotal] = useState(3);

  let cart: OrderDetailDTO[] = [];

  if (typeof window !== 'undefined') {
    cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  return (
    <Fragment>
      <h1 className='d-flex align-items-center justify-content-center'>Cart</h1>
      {cart.map((item, index) => (
        <Fragment key={index}>
          <CartItem
            imageUrl={item.images ? item.images[0] : ''}
            name={item.fullName ? item.fullName : ''}
            price={item.price}
            productId={item.productId}
            quantity={item.quantity}
          />
          <br />
        </Fragment>
      ))}
      {/* <Row>
        <Col md={3}></Col>
        <Col
          md={6}
          className='d-flex justify-content-center'
        >
          <h4>Total: </h4>
        </Col>
        <Col
          md={3}
          className='d-flex align-items-center justify-content-center'
        >
          <div className='d-flex justify-content-end'>
            <h4>{total}</h4>
          </div>
        </Col>
      </Row> */}
      <Row className='justify-content-center'>
        <Col
          xs='auto'
          className='m-4'
        >
          <Link href={'/Paying'}>
            <ButtonBase
              type='button'
              title='Order'
              variant='main-color'
              size='md'
            />
          </Link>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Cart;
