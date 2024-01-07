// Trong ProductDetail.tsx
import styles from '@/components/ProductDetailInMenu/productDetailInMenu.module.scss';
import classNames from 'classnames/bind';
import { Metadata } from 'next';
import React from 'react';
import { Card } from 'react-bootstrap';
import ButtonBase from '../Buttons/Button';
const cx = classNames.bind(styles);

export const metadata: Metadata = {
    title: 'Menu',
    description: 'Menu page of web',
}

interface ProductDetailProps {
    name: string;
    image: string;
    type: string;
    price: number;
    quantityInStock: number;
}

const productDetailInMenu: React.FC<ProductDetailProps> = ({ name, image, type, price, quantityInStock }) => {
    function handleClickButton(): void {
        throw new Error('Function not implemented.');
    }
    return (
        <div>
            <Card className={cx('mb-3')}>
                <Card.Body className={cx('mt-1')}>
                    <Card.Text className={cx('font-bold', 'mb-2')}> Tên: {name}</Card.Text>
                    <Card.Text className={cx('font-bold', 'mb-2')}>Giá: {price} vnd</Card.Text>
                    <Card.Text className={cx('font-bold', 'mb-2')}>Loại: {type}</Card.Text>
                    <Card.Text className={cx('font-bold', 'mb-2')}>Số lượng còn: {quantityInStock}</Card.Text>
                    <Card.Img className={cx()} variant="top" src={image} alt={name} />
                    <div className={cx('text-center', 'mb-3', 'mt-1')}>
                        <ButtonBase
                            type='button'
                            title='Create menu'
                            variant='main-color'
                            size='md'
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default productDetailInMenu;
