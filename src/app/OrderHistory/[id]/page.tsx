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
  const formatPrice = (number: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(number);
  }
  return (
    <div className={cx('background-color')}>
      <div className={cx('container')}>
        <div className={cx('h-30')}></div>
        <Fragment>
          <div className={cx('col-md-12', 'card-info', 'border', 'rounded')}>
            <p className={cx('font-arial', 'f-bold')}>Họ và tên: {order?.receiver}</p>
            <p className={cx('font-arial', 'f-bold')}>Số điện thoại: {order?.contactNumber}</p>
            <p className={cx('font-arial', 'f-bold')}>Địa chỉ: {order?.address}</p>
            <p className={cx('font-arial', 'f-bold')}>Địa chỉ: {order?.status === "PAID" ? "Đã thanh toán" : "Chưa thanh toán"}</p>
          </div>
          <div>
            <h1 className={cx('d-flex', 'align-items-center', 'justify-content-center', 'font-arial', 'mt-4', 'fs-xxl', 'f-bold', 'mb-3', 'text-title-color')}>
              Paying
            </h1>
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
            <h4 className={cx('font-arial', 'f-bold')}>Note:</h4>
          </Col>
          <hr />
          <Row className={cx('p-t-22')}>
            <Col md={6}></Col>
            <Col
              md={6}
              className={cx('d-flex', 'justify-content-center')}
            >
              <h4 className={cx('text-end', 'col-12', 'font-arial', 'f-bold')}>Total: {formatPrice(total)}</h4>
            </Col>
          </Row>
          <Row
            className={cx(
              'd-flex',
              'align-items-center',
              'justify-content-between',
              'p-t-22',
              'p-2'
            )}
          >
          </Row>
        </Fragment></div>
    </div >
  );
};

export default OrderHistory;
