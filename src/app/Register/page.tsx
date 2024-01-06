'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonBase from '@/components/Buttons/Button';

import classNames from 'classnames/bind';
import styles from './register.module.scss';
const cx = classNames.bind(styles);

const Register = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className={cx('red', 'mt-5')}>Register page</h1>
      <ButtonBase
        title='Back to home'
        variant='success'
        onClick={() => router.push('/')}
      />
    </div>
  );
};

export default Register;
