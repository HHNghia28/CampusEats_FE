import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './orderItem.module.scss';

const OrderItem: React.FC<OrderDTO> = ({ id, address, totalPrice, status }) => {
  return (
    <Container className={styles.orderItemContainer}>
      <Row className='d-flex align-items-center'>
        <Col md={6}>
          <p>
            <strong>Mã đơn:</strong> #{id}
          </p>
          <p>
            <strong>Ngày đặt hàng:</strong> {'HI'}
          </p>
        </Col>
        <Col md={6}>
          <p>
            <strong>Tổng giá:</strong> {totalPrice.toLocaleString()}đ
          </p>

          <p>
            <strong>Trạng thái:</strong> {status}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderItem;
