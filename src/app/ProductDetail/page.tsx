'use client';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './productDetail.module.scss';
const cx = classNames.bind(styles);

/*
  Page: Product Detail
  Author: UotLT
*/

const ProductDetail = () => {
  return (
    <div>
      {/* Code here */}
      <h1 className={cx('red', 'mt-5')}>Product Detail page</h1>
    </div>
  );
};

export default ProductDetail;
