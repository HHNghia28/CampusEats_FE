'use client';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './productItemInMenu.module.scss';
import ButtonBase from '../Buttons/Button';
const cx = classNames.bind(styles);
/*
  Page: Menu
  Author: HieuTTN
*/
interface ProductItemInMenuProps {
    updateTotal: (quantity: number) => void;
}

const ProductItemInMenu: React.FC<ProductItemInMenuProps> = ({ updateTotal }) => {
    const [isVisible, setIsVisible] = useState(true); // Thêm state mới
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const handleDelete = () => {
        // setIsVisible(false);
        setShowConfirmModal(true);
        // Hoặc bạn có thể thực hiện các xử lý khác tại đây
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
    const [counter, setCounter] = useState(1);

    const handleIncrease = () => {
        setCounter(prevState => prevState + 1);
        updateTotal(1);
    };

    const handleDecrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            updateTotal(-1); // Giảm tổng số lượng khi giảm số lượng trong CartItem
        }
    };

    return (
        <div>
            <Card>
                <div className={cx('d-flex', 'align-items-center', 'text-center', 'col-md-12')}>
                    <div className={cx('col-md-6', 'd-flex', 'my-3')}>
                        <div className={cx('col-md-6')}>Name</div>
                        <div className={cx('col-md-6',)}>Price</div>
                    </div>
                    <div className={cx('col-md-2')}></div>
                    <div className={cx('col-md-2', 'd-flex', 'my-3')}>
                        <div className={cx('me-4')}>
                            <Button
                                size='sm'
                                onClick={handleDecrease}
                                variant='outline-secondary'
                            >
                                -
                            </Button>
                        </div>
                        <h5 className={cx('mb-0', 'me-4')}>{counter}</h5>
                        <div className={cx('me-4')}>
                            <Button
                                size='sm'
                                onClick={handleIncrease}
                                variant='outline-secondary'
                            >
                                +
                            </Button>
                        </div>
                    </div>

                    <div className={cx('col-md-2')}>
                        <ButtonBase
                            type='button'
                            title='Xóa'
                            variant='main-color'
                            size='md'
                            onClick={handleDelete} // Gọi hàm handleDelete khi nhấn vào nút "Delete"
                        />
                    </div>
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
            </Card>
        </div >
    )
};
export default ProductItemInMenu;
