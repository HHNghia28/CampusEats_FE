'use client';
import classNames from 'classnames/bind';
import { Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './Paying.module.scss';

import ButtonBase from '@/components/Buttons/Button';
import PayingItem from '@/components/PayingItem/PayingItem';

const divStyle = {
  backgroundColor: '#DCDCDC',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px'
};
const cx = classNames.bind(styles);
const Paying = () => {
  const [total, setTotal] = useState(60000);
  const updateTotal = (quantity: number) => {
    setTotal(prevTotal => prevTotal + quantity);
  };
  const handleBackClick = () => {
    console.log('Button Clicked!');
    window.location.href = 'http://localhost:3000/Cart';
  };
  return (
    <Fragment>
      <div style={divStyle}>
        <p>Name: Nguyen Van A</p>
        <p>Sdt: 0123456789</p>
        <p>D/c: Nhu con mua hoang qua trong mot giac mo</p>
      </div>
      <div>
        <h1 className={cx('d-flex', 'align-items-center', 'justify-content-center')}>
          Paying
        </h1>
        <Row
          className={cx('d-flex', 'align-items-center', 'justify-content-between', 'm-3')}
        >
          <Col
            md={3}
            className={cx(
              'text-start',
              'd-flex',
              'align-items-center',
              'justify-content-center'
            )}
          >
            <h4>Order Information</h4>
          </Col>
          <Col md={6}></Col>
          <Col
            md={3}
            className={cx(
              'text-end',
              'd-flex',
              'align-items-center',
              'justify-content-center'
            )}
          >
            <h4>Add more</h4>
          </Col>
        </Row>
      </div>
      <PayingItem updateTotal={updateTotal} />
      <br />
      <PayingItem updateTotal={updateTotal} />
      <br />
      <PayingItem updateTotal={updateTotal} />
      <Col className={cx('text-start', 'p-t-22')}>
        <h4>Note order</h4>
      </Col>
      <hr />
      <Row className={cx('p-t-22')}>
        <Col md={3}></Col>
        <Col
          md={6}
          className={cx('d-flex', 'justify-content-center')}
        >
          <h4>Total: </h4>
        </Col>
        <Col
          md={3}
          className={cx('d-flex', 'justify-content-center', 'align-items-center')}
        >
          <div className={cx('d-flex', 'justify-content-end')}>
            <h4>{total}</h4>
          </div>
        </Col>
      </Row>
      <Row
        className={cx(
          'd-flex',
          'align-items-center',
          'justify-content-between',
          'p-t-22'
        )}
      >
        <Col className={cx('text-start')}>
          <ButtonBase
            type='button'
            title='Back'
            variant='main-color'
            size='md'
            onClick={handleBackClick}
          />
        </Col>
        <Col className={cx('text-end')}>
          <ButtonBase
            type='button'
            title='Paying'
            variant='main-color'
            size='md'
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Paying;
