'use client';
import Image from 'next/image';
import { Button, Navbar } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import ProductItem from '@/components/ProductItem/productItem';
import VoucherItem from '@/components/VoucherItem/voucherItem';
import Link from 'next/link';
const cx = classNames.bind(styles);
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTodayMenu } from '@/api/MenuAPI';
import Loading from '@/components/Loading/loading';

/*
  Page: Home
  Author: HieuTTN
*/

interface Voucher {
  code: string;
  description: string;
}
const vouchers: Voucher[] = [
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeeeeeee'
  },
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeeeeeee'
  },
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeeeeeee'
  },
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeeeeeee'
  },
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeeeeeee'
  }
];

export default function Home() {
  const [menus, setMenus] = useState<MenuDTO>();
  const {
    isPending,
    isError,
    data: results,
    error
  } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const data = await getTodayMenu();
      return data;
    }
  });

  // if (!isPending && results?.data !== undefined && results?.data !== menus) {
  //   setMenus(results?.data);
  // }

  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <div className={cx('container')}>
          <h3 className={cx('mt-5', 'text-center')}>Hôm nay ăn gì?</h3>
          <h4 className={cx('mt-2')}>Voucher</h4>
          <div className={cx('mt-3', 'row', 'justify-content-center')}>
            {vouchers.map(voucher => (
              <VoucherItem
                code={voucher.code}
                description={voucher.description}
              />
            ))}
          </div>

          <div className={cx('d-flex', 'mt-5', 'main-color')}>
            <Navbar.Brand>
              <Link
                href={'/'}
                className={cx('me-5', 'navbar-brand', 'fz-20')}
              >
                Tất cả
              </Link>
              <Link
                href={'/'}
                className={cx('me-5', 'navbar-brand', 'fz-20')}
              >
                Bán chạy nhất
              </Link>
              <Link
                href={'/'}
                className={cx('me-5', 'navbar-brand', 'fz-20')}
              >
                Nước
              </Link>
              <Link
                href={'/'}
                className={cx('me-5', 'navbar-brand', 'fz-20')}
              >
                Combo
              </Link>
              <Link
                href={'/'}
                className={cx('me-5', 'navbar-brand', 'fz-20')}
              >
                Thức ăn nhanh
              </Link>
            </Navbar.Brand>
          </div>
          <h4 className={cx('mt-2')}>Sản phẩm</h4>
          <div className={cx('row', 'justify-content-center')}>
            {/* {menus.map((menu: object) => (
              <ProductItem
                key={product.id}
                name={product.name}
                imageSrc={product.imageSrc}
                price={product.price}
              />
            ))} */}
          </div>
        </div>
      )}
    </div>
  );
}
