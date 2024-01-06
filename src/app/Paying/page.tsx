'use client';
import React from 'react';

import classNames from 'classnames/bind';
import styles from './Paying.module.scss';
const cx = classNames.bind(styles);
const Paying = () => {
  return (
    <div>
      <h1 className={cx('red', 'mt-5')}>Paying page</h1>
    </div>
  );
};

export default Paying;
