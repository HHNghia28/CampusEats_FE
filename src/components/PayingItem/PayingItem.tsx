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

  return (
    <div>
      <Container className={cx('colorBg', 'p-3', 'br-8')}>
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
            <div className={cx('py-2')}>{name}</div>
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
              <h5 className={cx('mb-0')}>{counter}</h5>
              {/* <Button
                size='sm'
                onClick={handleIncrease}
                variant='outline-secondary'
              >
                +
              </Button> */}
            </div>
          </Col>

          <Col
            md={3}
            className={cx('d-flex', 'align-items-center', 'justify-content-center')}
          >
            <div className={cx('py-2')}>{price}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PayingItem;
