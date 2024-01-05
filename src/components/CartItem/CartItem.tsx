'use client';
// import React from 'react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button, Col, Form, Row, Table, Container, Image } from 'react-bootstrap';
import ButtonBase from '@/components/Buttons/Button';
import ModalBase from '@/components/Modal/Modal';
import ModalForm from '@/components/ModalForm/ModalForm';
import { toast } from 'react-toastify';

/*
  Page: Cart
  Author: QuyenNNM
*/
interface CartItemProps {
    updateTotal: (quantity: number) => void;
}

const CartItem = ({ updateTotal }: CartItemProps) => {
    const customStyle = {
        width: '140px',
        height: '140px',
        objectFit: 'cover'
    };
    const [counter, setCounter] = useState(1);

    const handleIncrease = () => {
        setCounter(prevState => prevState + 1)
        updateTotal(1);
    }

    const handleDecrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            updateTotal(-1); // Giảm tổng số lượng khi giảm số lượng trong CartItem
        }
    }

    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={3} className="d-flex align-items-center justify-content-center">

                        <Image src="https://pizzapoco.vn/wp-content/uploads/2021/05/pizzamoza.png" style={customStyle} /></Col>

                    <Col md={6} className="d-flex flex-column align-items-start">
                        <div className='py-2'>Name</div>
                        <div className='py-2'>Price</div>
                    </Col>

                    <Col md={3} className="d-flex align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-center gap-2">
                            <Button size='sm' onClick={handleDecrease} variant="outline-secondary">-</Button>
                            <h5 className="mb-0">{counter}</h5>
                            <Button size='sm' onClick={handleIncrease} variant="outline-secondary">+</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const CartTotal = () => {

};

export default CartItem;
