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
import { Metadata } from 'next';

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
          <p
            className={cx('d-flex', 'text-start', 'pt-4', 'fs-xl-title', 'fw-600')}
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            GIỎ HÀNG CỦA TÔI
          </p>
        </div>

        <div className={cx('table-bg-cart', 'border', 'rounded')}>
          {/* <div className={cx('hideOnMobile')}> */}
          <Row
            className={cx(
              'align-items-center',
              'justify-content-center',
              'pt-4',
              'hideOnMobile'
            )}
          >
            <Col
              md='2'
              className={cx(
                'd-flex',
                'align-items-center',
                'justify-content-center',
                'rounded',
                'fs-xs-title',
                'hideOnMobile'
              )}
            >
              <p
                className={cx('fs-sm-title', 'fw-700')}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                Ảnh sản phẩm
              </p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p
                className={cx('fs-sm-title', 'fw-700')}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                Tên sản phẩm
              </p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p
                className={cx('fs-sm-title', 'fw-700')}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                Đơn giá
              </p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p
                className={cx('fs-sm-title', 'fw-700')}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                Số lượng
              </p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p
                className={cx('fs-sm-title', 'fw-700')}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                Thành tiền
              </p>
            </Col>
            <Col
              md='2'
              className='d-flex align-items-center justify-content-center'
            >
              <p
                className={cx('fs-sm-title', 'fw-700')}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                Xóa
              </p>
            </Col>
          </Row>
          {/* </div>s */}
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
        <Row className={cx('d-flex', 'align-items-center', 'pt-4', 'm-0', 'fs-sm-title')}>
          <Col
            md='3'
            className='d-flex align-items-center justify-content-start'
          >
            <Link
              href={'/'}
              legacyBehavior
            >
              <a
                style={{
                  width: '100%',
                  display: 'block',
                  fontFamily: 'Arial, sans-serif'
                }}
              >
                <ButtonBase
                  type='button'
                  title='Tiếp tục mua sắm'
                  variant='main-color'
                  size='md'
                  styles={{
                    width: '100%',
                    borderRadius: '10px',
                    backgroundColor: ' var(--white-color)',
                    color: 'var(--dark)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontFamily: 'Arial',
                    fontWeight: 700
                  }}
                />
              </a>
            </Link>
          </Col>
          <Col
            md='5'
            className='d-flex align-items-center justify-content-center'
          ></Col>
          <Col
            md='4'
            className={cx(
              'd-flex',
              'align-items-center',
              'justify-content-center',
              'border',
              'rounded',
              'margin-button'
            )}
            style={{ backgroundColor: 'var(--white-color)' }}
          >
            <p
              className={cx('p-0', 'pt-3', 'fs-sm-title')}
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <span
                style={{
                  color: 'black',
                  fontFamily: 'Arial, sans-serif'
                }}
                className={cx('fs-sm-title', 'fw-700')}
              >
                Tổng tiền thanh toán:
              </span>
              <span
                className={cx('fs-sm-title', 'fw-700')}
                style={{ color: 'var(--main-color)' }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* {totalPrice.toFixed()}₫ */}
                {totalPrice.toLocaleString('vi-VN')}₫
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
            className='d-flex align-items-center justify-content-center mb-4'
          >
            <Link
              href={'/Paying'}
              legacyBehavior
            >
              <a style={{ width: '100%', display: 'block' }}>
                <ButtonBase
                  type='button'
                  title='Mua hàng'
                  variant='main-color'
                  size='md'
                  styles={{
                    width: '100%',
                    borderRadius: '10px',
                    backgroundColor: ' var(--btn-color)',
                    fontWeight: 700
                  }}
                />
              </a>
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
