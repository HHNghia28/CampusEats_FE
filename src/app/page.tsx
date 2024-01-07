'use client';
import ProductItem from '@/components/ProductItem/productItem';
import VoucherItem from '@/components/VoucherItem/voucherItem';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import styles from './home.module.scss';
import { getMenuToday } from '@/api/MenuAPI';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '@/components/Loading/loading';
const cx = classNames.bind(styles);

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
  const [menu, setMenu] = useState<MenuDTO[]>();

  const {
    isPending,
    isError,
    data: results,
    error
  } = useQuery({
    queryKey: ['menuToday'],
    queryFn: async () => {
      const data = await getMenuToday();
      return data;
    }
  });

  if (!isPending && results?.data !== undefined && results?.data !== menu) {
    setMenu(results?.data);
  }

  return (
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

      {/* <div className={cx('d-flex', 'mt-5', 'main-color')}>
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
      </div> */}
      <h4 className={cx('mt-2')}>Sản phẩm</h4>
      <div className={cx('row', 'justify-content-center')}>
        {isPending ? (
          <Loading />
        ) : menu && menu.length > 0 ? (
          menu.map(item =>
            item.quantity > 0 ? (
              <ProductItem
                key={item.productID}
                productId={item.productID}
                name={item.fullName ? item.fullName : ''}
                imageSrc={item.images ? item.images[0] : ''}
                price={item.price ? item.price : 0}
              />
            ) : null
          )
        ) : (
          <p>Hôm nay không còn sản phẩm nào</p>
        )}
      </div>
    </div>
  );
}
