'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Image from 'next/image';
const cx = classNames.bind(styles);

const Navigation = () => {
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary'
    >
      <Container>
        <Navbar.Brand href='/'>
          <Image
            src='/Logo_Brand.png'
            alt='Logo'
            width={200}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={cx('w-100 d-flex justify-content-between align-items-center')}>
            <div className={cx('d-flex')}>
              <Link
                href={'/'}
                className={cx('nav-link')}
              >
                Best seller
              </Link>
              <Link
                href={'/'}
                className={cx('nav-link')}
              >
                Categories
              </Link>
              <Link
                href={'/About'}
                className={cx('nav-link')}
              >
                About us
              </Link>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <Link
                href={'/Login'}
                className='nav-link'
              >
                Login
              </Link>
              <Link
                href={'/Register'}
                className='nav-link'
              >
                Register
              </Link>
              <Link
                href={'/UserProfile'}
                className='nav-link'
              >
                User profile
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
