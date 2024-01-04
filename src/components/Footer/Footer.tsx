'use client';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className='text-center mt-5 font-bold bg-slate-700'>
      G1-Food @copyright by group-1 FPT university
    </div>
  );
};

export default Footer;
