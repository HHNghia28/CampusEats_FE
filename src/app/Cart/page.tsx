'use client';
// import React from 'react';
import ButtonBase from '@/components/Buttons/Button';
import CartItem from '@/components/CartItem/CartItem';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import '../../styles/global.scss';
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
    <div className={cx('containerBackground')}>
      <div className='container'>
        <div>
          <h2
            className={cx('d-flex', 'text-start', 'py-4')}
            style={{ fontFamily: 'Arial, sans-serif', fontSize: 'var(--fs-xl)' }}
          >
            GIỎ HÀNG CỦA TÔI
          </h2>
        </div>

        <div className={cx('table-bg-cart')}>
          <Row className={cx('d-flex', 'align-items-center', 'pt-4')}>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p style={{ fontFamily: 'Arial, sans-serif' }}>Ảnh sản phẩm</p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p style={{ fontFamily: 'Arial, sans-serif' }}>Tên sản phẩm</p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p style={{ fontFamily: 'Arial, sans-serif' }}>Đơn giá</p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p style={{ fontFamily: 'Arial, sans-serif' }}>Số lượng</p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p style={{ fontFamily: 'Arial, sans-serif' }}>Thành tiền</p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p style={{ fontFamily: 'Arial, sans-serif' }}>Xóa</p>
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
              {/* <br /> */}
            </Fragment>
          ))}
          {<br />}
        </div>
        <Row className={cx('d-flex', 'align-items-center', 'pt-4')}>
          <Col
            md='3'
            className='d-flex align-items-center justify-content-start'
          >
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
            md='5'
            className='d-flex align-items-center justify-content-center'
          ></Col>
          <Col
            md='4'
            className='d-flex align-items-center justify-content-center'
            style={{ backgroundColor: 'var(--white-color)' }}
          >
            <p
              className='pt-3 pb-0'
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <span style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                Tổng tiền thanh toán:
              </span>
              <span style={{ color: 'var(--main-color)' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {totalPrice.toFixed()}₫
              </span>
            </p>
          </Col>
        </Row>

        <Row className={cx('d-flex', 'justify-content-end', 'mt-2')}>
          <Col
            md='3'
            className='d-flex align-items-center justify-content-center'
          ></Col>
          <Col
            md='5'
            className='d-flex align-items-center justify-content-center'
          ></Col>
          <Col
            md='4'
            className='d-flex align-items-center justify-content-center'
            style={{ backgroundColor: ' var(--btn-color)' }}
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
    </div>
    // <Fragment>

    // </Fragment>
  );
};

export default Cart;
