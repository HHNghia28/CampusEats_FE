'use client';
// import React from 'react';
import ButtonBase from '@/components/Buttons/Button';
import CartItem from '@/components/CartItem/CartItem';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
const cx = classNames.bind(styles);
/*
  Page: Cart
  Author: QuyenNNM
*/
const Cart = () => {
  const [cart, setCart] = useState<OrderDetailDTO[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loadedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(loadedCart);
    }
  }, []);

  useEffect(() => {
    const newTotalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const handleCartChange = () => {
    if (typeof window !== 'undefined') {
      const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(updatedCart);
    }
  };
  return (
    <div className='container'>
      <h1 className='d-flex text-start'>GIỎ HÀNG CỦA TÔI</h1>
      <Row className='d-flex align-items-center'>
        <Col
          md='2'
          className='d-flex align-items-center justify-content-center'
        >
          Ảnh sản phẩm
        </Col>
        <Col
          md='2'
          className='d-flex align-items-center justify-content-center'
        >
          Tên sản phẩm
        </Col>
        <Col
          md='2'
          className='d-flex align-items-center justify-content-center'
        >
          Đơn giá
        </Col>
        <Col
          md='2'
          className='d-flex align-items-center justify-content-center'
        >
          Số lượng
        </Col>
        <Col
          md='2'
          className='d-flex align-items-center justify-content-center'
        >
          Thành tiền
        </Col>
        <Col
          md='2'
          className='d-flex align-items-center justify-content-center'
        >
          Xóa
        </Col>
      </Row>
      {cart.map((item, index) => (
        <Fragment key={index}>
          <CartItem
            imageUrl={item.images ? item.images[0] : ''}
            name={item.fullName ? item.fullName : ''}
            price={item.price}
            productId={item.productId}
            quantity={item.quantity}
            onCartChange={handleCartChange}
            // onQuantityChange={handleQuantityChange}
          />
          <br />
        </Fragment>
      ))}

      <Row>
        <Col md={3}>
          <Link href={'/'}>
            <ButtonBase
              type='button'
              title='Tiếp tục mua sắm'
              variant='main-color'
              size='md'
            />
          </Link>
        </Col>
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
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
          </div>
        </Col>
      </Row>
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
    </div>
    // <Fragment>

    // </Fragment>
  );
};

export default Cart;
