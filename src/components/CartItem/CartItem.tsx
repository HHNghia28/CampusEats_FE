'use client';
// import React from 'react';
import ButtonBase from '@/components/Buttons/Button';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import styles from './CartItem.module.scss';
const cx = classNames.bind(styles);
/*
  Page: Cart
  Author: QuyenNNM
*/
interface CartItemProps {
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  productId: number;
}

const CartItem: React.FC<CartItemProps> = ({
  imageUrl,
  name,
  price,
  productId,
  quantity
}) => {
  const [isVisible, setIsVisible] = useState(true); // Thêm state mới
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleDelete = () => {
    // setIsVisible(false);
    setShowConfirmModal(true);
    deleteCart(productId);
  };
  const handleConfirmDelete = () => {
    // Xử lý xóa CartItem ở đây
    setIsVisible(false);
    setShowConfirmModal(false);
  };

  const handleCloseModal = () => {
    setShowConfirmModal(false);
  };

  const customStyle: React.CSSProperties = {
    width: '140px',
    height: '140px',
    objectFit: 'cover' as 'cover'
  };

  const updateQuantityCart = (count: number) => {
    const cart: OrderDetailDTO[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const orderDetail = cart.find(item => item.productId == productId);

    if (orderDetail != undefined) {
      if (orderDetail.quantity != undefined) {
        orderDetail.quantity += count;
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const deleteCart = (productId: number) => {
    const cart: OrderDetailDTO[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const updatedCart = cart.filter(item => item.productId !== productId);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const [counter, setCounter] = useState(quantity);

  const handleIncrease = () => {
    setCounter(prevState => prevState + 1);
    updateQuantityCart(1);
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      updateQuantityCart(-1);
    }
  };

  return isVisible ? (
    <div>
      <Container>
        <Row className={cx('d-flex', 'align-items-center')}>
          <Col
            md={4}
            className={cx('d-flex', 'align-items-center', 'justify-content-center')}
          >
            <Image
              src={imageUrl}
              style={customStyle}
            />
          </Col>

          <Col
            md={4}
            className={cx('d-flex', 'flex-column', 'align-items-start')}
          >
            <div className='py-2'>{name}</div>
            <div className='py-2'>{price}</div>
          </Col>

          <Col
            md={4}
            className={cx('d-flex', 'align-items-center', 'justify-content-center')}
          >
            <div
              className={cx('d-flex', 'align-items-center', 'justify-center', 'gap-2')}
            >
              <Button
                size='sm'
                onClick={handleDecrease}
                variant='outline-secondary'
              >
                -
              </Button>
              <h5 className={cx('mb-0')}>{counter}</h5>
              <Button
                size='sm'
                onClick={handleIncrease}
                variant='outline-secondary'
              >
                +
              </Button>

              <ButtonBase
                type='button'
                title='Delete'
                variant='main-color'
                size='md'
                onClick={handleDelete} // Gọi hàm handleDelete khi nhấn vào nút "Delete"
              />
              <Modal
                show={showConfirmModal}
                onHide={handleCloseModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa sản phẩm này không?</Modal.Body>
                <Modal.Footer>
                  <Button
                    variant='secondary'
                    onClick={handleCloseModal}
                  >
                    Không
                  </Button>
                  <Button
                    variant='primary'
                    onClick={handleConfirmDelete}
                  >
                    Có
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ) : null;
};

const CartTotal = () => {};

export default CartItem;
