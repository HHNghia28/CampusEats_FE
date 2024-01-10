'use client';
// import React from 'react';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import styles from './Paying.module.scss';
const cx = classNames.bind(styles);
/*
  Page: Cart
  Author: QuyenNNM
*/
interface PayingItemProps {
  // updateTotal: (quantity: number) => void;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  productId: number;
}
const PayingItem: React.FC<PayingItemProps> = ({ imageUrl,
  name,
  price,
  productId,
  quantity }) => {
  const customStyle: React.CSSProperties = {
    width: '140px',
    height: '140px',
    objectFit: 'cover' as 'cover'
  };
  const [counter, setCounter] = useState(quantity);

  // const [price, setPrice] = useState(20000);
  const handleIncrease = () => {
    setCounter(prevState => prevState + 1);
    // setPrice(price + 20000);
    // updateTotal(20000);
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      // setPrice(price - 20000);
      // updateTotal(-20000);
    }
  };
  const formatPrice = (number: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(number);
  }

  return (
    <div className={cx('container')}>
      <Container className={cx('colorBg', 'p-3', 'br-8', 'col-sd-0')}>
        <Row className={cx('d-flex', 'align-items-center')}>
          <Col
            md={3}
            className={cx('d-flex', 'align-items-center', 'justify-content-center')}
          >
            <Image
              src={imageUrl}
              style={customStyle}
            />
          </Col>

          <Col
            md={6}
            className={cx('d-flex', 'flex-column', 'align-items-start')}
          >
            <div className={cx('py-2', 'font-arial')}>{name}</div>
            <div
              className={cx('d-flex', 'align-items-center', 'justify-center', 'gap-2')}
            >
              {/* <Button
                size='sm'
                onClick={handleDecrease}
                variant='outline-secondary'
              >
                -
              </Button> */}
              <h5 className={cx('mb-0', 'font-arial')}>{counter}</h5>
              {/* <Button
                size='sm'
                onClick={handleIncrease}
                variant='outline-secondary'
              >
                +
              </Button> */}
            </div>
          </Col>
          < Col
            md={3}
            className={cx('d-flex', 'align-items-center', 'justify-content-center')}
          >
            <div className={cx('py-2', 'font-arial', 'font-arial', 'f-bold')}>{formatPrice(price * quantity)}</div>
          </ Col>
        </Row >
      </Container >


      <div className={cx('colorBg', 'p-3', 'br-8', 'sd-d-block', 'd-none')}>
        <div className={cx('align-items-center')}>
          <div
            className={cx('d-flex', 'align-items-center', 'justify-content-center')}
          >
            <Image
              src={imageUrl}
              style={customStyle}
            />
          </div>

          <div
            className={cx('col-12', 'd-flex', 'align-items-center', 'justify-content-center')}
          >
            <div className={cx('col-1')}></div>
            <div className={cx('col-8', 'py-2', 'font-arial')}>{name}</div>
            <div
              className={cx('col-2', 'd-flex', 'align-items-center', 'justify-center', 'gap-2')}
            >
              {/* <Button
                size='sm'
                onClick={handleDecrease}
                variant='outline-secondary'
              >
                -
              </Button> */}
              <h5 className={cx('mb-0', 'col-12', 'text-end', 'font-arial')}>{counter}</h5>
              {/* <Button
                size='sm'
                onClick={handleIncrease}
                variant='outline-secondary'
              >
                +
              </Button> */}
            </div>
            <div className={cx('col-1')}></div>
          </div>
          <div
            className={cx('col-12', 'd-flex', 'align-items-center', 'justify-content-center')}
          >
            <div className={cx('col-1')}></div>
            <div className={cx('col-7', 'py-2')}></div>
            < div
              className={cx('d-flex', 'align-items-end', 'justify-content-end', 'col-3')}
            >
              <div className={cx('py-2', 'col-12', 'text-end', 'font-arial', 'f-bold')}>{price * quantity}</div>
            </ div>
            <div className={cx('col-1')}></div>
          </div>
        </div >
      </div >
    </div>

  );
};

export default PayingItem;
