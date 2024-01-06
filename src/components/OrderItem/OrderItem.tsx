import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './orderItem.module.scss';

interface OrderItems {
  order: {
    orderId: string;
    total: string;
    address: string;
    date: string;
    status: string;
  };
}

const OrderItem: React.FC<OrderItems> = ({ order }) => {
  return (
    <Container className={styles.orderItemContainer}>
      <Row className='d-flex align-items-center'>
        <Col md={6}>
          <p>
            <strong>Order ID:</strong> #{order.orderId}
          </p>
          <p>
            <strong>Address:</strong> {order.address}
          </p>
          <p>
            <strong>Date:</strong> {order.date}
          </p>
        </Col>
        <Col md={6}>
          <p>
            <strong>Total:</strong> {order.total}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderItem;
