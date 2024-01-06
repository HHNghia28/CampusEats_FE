'use client';
import React from 'react';

import classNames from 'classnames/bind';
import styles from './userProfile.module.scss';
const cx = classNames.bind(styles);

const UserProfile = () => {
  return (
    <div>
      <h1 className={cx('red', 'mt-5')}>User profile page</h1>
    </div>
  );
};

export default UserProfile;
