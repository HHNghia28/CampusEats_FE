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
    imageSrc: string;
}

const VoucherItem: React.FC<VoucherItemProps> = ({ code, description, imageSrc }) => {
    function handleClickButton(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div>
            <Card className={cx('m-2', 'mb-3', 'card-item')}>
                <div className={cx('div-card')}>
                    <Card.Img
                        className={cx('card-img-top', 'mt-3')}
                        variant='top'
                        src={imageSrc}
                        alt={code} />
                </div>
                <Card.Body className={cx('flex', 'flex-col', 'text-center')}>
                    <Card.Title className={cx('mb-0', 'font-arial', 'fw-600')}>{code}</Card.Title>
                    <Card.Text className={cx('font-bold', 'font-arial')}>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default VoucherItem;
