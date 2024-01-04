'use client';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './cart.module.scss';
const cx = classNames.bind(styles);

/*
  Page: Cart
  Author: QuyenNNM
*/

const Cart = () => {
  return (
    <div>
      {/* Code here */}
      <h1 className={cx('red', 'mt-5')}>Cart page</h1>
    </div>
  );
};

export default Cart;
