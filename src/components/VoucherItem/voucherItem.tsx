'use client';
import Image from 'next/image';
import { Button, Card } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './voucherItem.module.scss';
import ButtonBase from '../Buttons/Button';
import { Metadata } from 'next';
const cx = classNames.bind(styles);

/*
  Page: Voucher Home
  Author: HieuTTN
*/

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page of web',
}

interface VoucherItemProps {
    code: string;
    description: string;
}

const VoucherItem: React.FC<VoucherItemProps> = ({ code, description }) => {
    function handleClickButton(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <Card className={cx('col-md-2', 'm-2', 'mb-3')}>
            <Card.Img className={cx('card-img-top')} variant="top" />
            <Card.Body className={cx('flex', 'flex-col', 'text-center')}>
                <Card.Title className={cx('mb-2')}>{code}</Card.Title>
                <Card.Text className={cx('font-bold')}>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default VoucherItem;
