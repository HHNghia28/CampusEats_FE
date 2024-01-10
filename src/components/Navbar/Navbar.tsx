'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary'
    >
      <Container>
        <Navbar.Brand>
          <Link
            href={'/'}
            className='nav-link'
          >
            G1-Food
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='flex justify-between items'>
            <Link
              href={'/'}
              className='nav-link'
            >
              Trang chủ
            </Link>
            <Link
              href={'/Cart'}
              className='nav-link'
            >
              Giỏ hàng
            </Link>
            <Link
              href={'/UserProfile'}
              className='nav-link'
            >
              Tài khoản
            </Link>
            <Link
              href={'/Login'}
              className='nav-link'
            >
              Đăng nhập
            </Link>
            <Link
              href={'/Login'}
              className='nav-link'
            >
              Đăng xuất
            </Link>
            <Link
              href={'/Register'}
              className='nav-link'
            >
              Đăng Ký
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
