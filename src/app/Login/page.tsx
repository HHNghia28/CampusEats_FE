'use client';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import ButtonBase from '@/components/Buttons/Button';
import classNames from 'classnames/bind';
import styles from './login.module.scss';
const cx = classNames.bind(styles);

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className={cx('red', 'mt-5')}>Login page</h1>
      <ButtonBase
        title='Back to home'
        variant='success'
        onClick={() => router.push('/')}
      />
    </div>
  );
};

export default Login;
