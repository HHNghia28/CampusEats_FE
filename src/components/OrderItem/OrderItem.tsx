import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './orderItem.module.scss';

const OrderItem: React.FC<OrderDTO> = ({ id, address, totalPrice, status }) => {
  return (
    <Container className={styles.orderItemContainer}>
      <Row className='d-flex align-items-center'>
        <Col md={6}>
          <p>
            <strong>Order ID:</strong> #{id}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Date:</strong> {"HI"}
          </p>
        </Col>
        <Col md={6}>
          <p>
            <strong>Total:</strong> {totalPrice}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderItem;
