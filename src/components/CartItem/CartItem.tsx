'use client';
// import React from 'react';
import ButtonBase from '@/components/Buttons/Button';
import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
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
  onCartChange: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  imageUrl,
  name,
  price,
  productId,
  quantity,
  onCartChange
}) => {
  const [isVisible, setIsVisible] = useState(true); // Thêm state mới
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleDelete = () => {
    setShowConfirmModal(true);
  };
  const handleConfirmDelete = (productId: number) => {
    deleteCart(productId);
    setShowConfirmModal(false);
    setIsVisible(false); // Ẩn luôn item sau khi xóa
  };

  const handleCloseModal = () => {
    setShowConfirmModal(false);
  };

  // const customStyle: React.CSSProperties = {
  //   width: '110px',
  //   height: '110px',
  //   objectFit: 'cover' as 'cover'
  // };

  const updateQuantityCart = (count: number) => {
    const cart: OrderDetailDTO[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const orderDetail = cart.find(item => item.productId == productId);

    if (orderDetail != undefined) {
      if (orderDetail.quantity != undefined) {
        orderDetail.quantity += count;
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    onCartChange();
  };

  const deleteCart = (productId: number) => {
    const cart: OrderDetailDTO[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const index = cart.findIndex(item => item.productId === productId);

    if (index !== -1) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      onCartChange();
    }
  };
  const [counter, setCounter] = useState(quantity);

  const handleIncrease = () => {
    setCounter(prevState => prevState + 1);
    updateQuantityCart(1);
    // onQuantityChange();
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      updateQuantityCart(-1);
      // onQuantityChange();
    }
  };

  return isVisible ? (
    <div className={cx('mobile')}>
      <hr className={cx('hr-color', 'hideOnMobile')} />
      <div className={cx('row', 'd-flex', 'align-items-center', 'pt-tab')}>
        <div
          className={cx(
            'col-md-2',
            'col-sm-4',
            'col-xs-12',
            'd-flex',
            'align-items-center',
            'justify-content-center'
          )}
        >
          <div
            className={cx(
              'd-flex',
              'align-items-center',
              'justify-content-center',
              'w-100-mb'
            )}
          >
            <Image
              src={imageUrl}
              className={cx('custom-image-style', 'img-m')}
              // style={customStyle}
              thumbnail
            />
          </div>
        </div>
        <div className='col-md-4 col-sm-4 col-xs-12'>
          <div className={cx('d-flex', 'align-items-center', 'justify-content-center')}>
            <div
              className='row'
              style={{ fontFamily: 'Arial, sans-serif', width: '100%', padding: '0px' }}
            >
              <div className='col-md-6 col-sm-12 col-xs-12'>
                <div
                  className={cx(
                    'hoverText',
                    'py-2',
                    'fs-sm-title',
                    'd-flex',
                    'align-items-center',
                    'justify-content-center',
                    'pl-name'
                  )}
                  style={{ fontFamily: 'Arial, sans-serif', width: '100%' }}
                >
                  {name}
                </div>
              </div>
              <div className='col-md-6 col-sm-12 col-xs-12'>
                <div
                  className={cx(
                    'text-main-color',
                    'py-2',
                    'fs-sm-title',
                    'd-flex',
                    'align-items-center',
                    'justify-content-center'
                  )}
                  style={{ fontFamily: 'Arial, sans-serif', width: '100%' }}
                >
                  {price.toLocaleString('vi-VN')}₫{/* {price}₫ */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-sm-4 col-xs-12'>
          <div className={cx('d-flex', 'align-items-center', 'justify-content-center')}>
            <div
              className='row'
              style={{ fontFamily: 'Arial, sans-serif', width: '100%', padding: '0px' }}
            >
              <div className='col-md-4 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center'>
                <div
                  className={cx(
                    'd-flex',
                    'align-items-center',
                    'justify-center',
                    'gap-2'
                  )}
                >
                  <Button
                    size='sm'
                    onClick={handleDecrease}
                    variant='outline-secondary'
                    className={cx('custom-button')}
                  >
                    -
                  </Button>
                  <p
                    className={cx('mb-0', 'fs-sm-title')}
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    {counter}
                  </p>
                  <Button
                    size='sm'
                    onClick={handleIncrease}
                    variant='outline-secondary'
                    className={cx('custom-button')}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div
                className={cx(
                  'col-md-4',
                  'col-sm-12',
                  'col-xs-12',
                  'd-flex',
                  'align-items-center',
                  'justify-content-center',
                  'pt-2',
                  'fs-sm-title',
                  'text-main-color'
                )}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {(price * counter).toLocaleString('vi-VN')}₫{/* {price * counter}₫ */}
              </div>
              <div className='col-md-4 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center'>
                <div className='py-2'>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={handleDelete}
                    className={cx('cursor-pointer', 'icon-delete')}
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
                        onClick={() => handleConfirmDelete(productId)}
                      >
                        Có
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const CartTotal = () => {};

export default CartItem;
