'use client';
import Image from 'next/image';
import { Button, Card } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './productItem.module.scss';
import ButtonBase from '../Buttons/Button';
import { Metadata } from 'next';
const cx = classNames.bind(styles);

/*
  Page: Product Home
  Author: HieuTTN
*/

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page of web',
}

interface ProductItemProps {
    imageSrc: string;
    name: string;
    price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ imageSrc, name, price }) => {
    function handleClickButton(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <Card className={cx('productItem', 'col-md-2', 'm-2', 'mb-3')}>
            <Card.Img className={cx('card-img-top')} variant="top" src={imageSrc} alt={name} />
            <Card.Body className={cx('flex', 'flex-col', 'text-center')}>
                <Card.Title className={cx('mb-2')}>{name}</Card.Title>
                <Card.Text className={cx('font-bold')}>${price}</Card.Text>
                <ButtonBase
                    type='button'
                    title='Mua ngay'
                    variant='main'
                    size='md'
                    onClick={handleClickButton}
                />
            </Card.Body>
        </Card>
    );
};

export default ProductItem;
