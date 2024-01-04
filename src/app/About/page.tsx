'use client';
import ButtonBase from '@/components/Buttons/Button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from 'react-bootstrap';

import classNames from 'classnames/bind';
import styles from './about.module.scss';
const cx = classNames.bind(styles);

const About = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <h1 className={cx('red', 'mt-5')}>About page</h1>
      </div>
      <ButtonBase
        title='Back to home'
        variant='success'
        onClick={() => router.push('/')}
      />
    </div>
  );
};

export default About;
