'use client';
import classNames from 'classnames/bind';
import { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './Paying.module.scss';

import { getOrderByOrderId } from '@/api/OrderAPI';
import PayingItem from '@/components/PayingItem/PayingItem';
import { useQuery } from '@tanstack/react-query';

const divStyle = {
  backgroundColor: '#DCDCDC',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px'
};
const cx = classNames.bind(styles);
const OrderHistory = ({ params }: { params: { id: string } }) => {
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState<OrderDTO>();

  const {
    isPending,
    isError,
    data: results,
    error
  } = useQuery({
    queryKey: ['orderHistory', params.id],
    queryFn: async () => {
      const data = await getOrderByOrderId(params.id);
      return data;
    }
  });

  if (!isPending && results?.data !== undefined && results?.data !== order) {
    setOrder(results?.data);

    let totalPrice = 0;

    if (results?.data?.details && results?.data?.details.length > 0) {
      totalPrice = results?.data?.details.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
      }, 0);
    }

    setTotal(totalPrice);
  }

  return (
    <Fragment>
      <div style={divStyle}>
        <p>Mã đơn: {order?.id}</p>
        <p>Name: {order?.receiver}</p>
        <p>Sdt: {order?.contactNumber}</p>
        <p>D/c: {order?.address}</p>
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
      {order?.details?.map((item, index) => (
        <Fragment key={index}>
          <PayingItem
            imageUrl={item.images ? item.images[0] : ''}
            name={item.fullName ? item.fullName : ''}
            price={item.price}
            productId={item.productId}
            quantity={item.quantity}
          />
          <br />
        </Fragment>
      ))}
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
    </Fragment>
  );
};

export default OrderHistory;
