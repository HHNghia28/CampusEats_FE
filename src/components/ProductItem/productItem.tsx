'use client';
import classNames from 'classnames/bind';
import { Metadata } from 'next';
import { Card } from 'react-bootstrap';
import ButtonBase from '../Buttons/Button';
import styles from './productItem.module.scss';
import Link from 'next/link';
const cx = classNames.bind(styles);

/*
  Page: Product Home
  Author: HieuTTN
*/

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of web'
};

interface ProductItemProps {
  imageSrc: string;
  name: string;
  price: number;
  productId: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  imageSrc,
  name,
  price,
  productId
}) => {
  function handleClickButton(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Link href={`/Product/${productId}`} className={cx('productItem', 'col-md-3', 'm-2', 'mb-3', 'navbar-brand')}>
      <Card className={cx('card-item')}>
        <div className={cx('div-card')}>
          <Card.Img
            className={cx('card-img-top', 'p-2')}
            variant='top'
            src={imageSrc}
            alt={name}
          />
        </div>
        <Card.Body className={cx('flex', 'flex-col', 'text-center')}>
          <Card.Title className={cx('mb-2', 'font-arial', 'fw-600')}>{name}</Card.Title>
          <Card.Text className={cx('font-bold', 'font-arial')}>{price} VND</Card.Text>
          <ButtonBase
            type='button'
            title='Mua ngay'
            variant='main'
            size='md'
            onClick={handleClickButton}
          />
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductItem;
