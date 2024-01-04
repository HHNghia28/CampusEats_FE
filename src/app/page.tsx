'use client';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
const cx = classNames.bind(styles);

/*
  Page: Home
  Author: HieuTTN
*/

export default function Home() {
  return (
    <div>
      {/* Code here */}
      <h1 className={cx('red', 'mt-5')}>Home page</h1>
    </div>
  );
}
