'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCustomer = localStorage.getItem('account');

      if (storedCustomer) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }
  })

  const logout = () => {
    if (typeof window !== 'undefined') {
      const storedCustomer = localStorage.getItem('account');

      if (storedCustomer) {
        setIsLogin(true);
        localStorage.removeItem('account');

        router.push('/Login');
      } else {
        setIsLogin(false);
      }
    }
  };

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
            Sâm Bổ Lượng
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
            {isLogin ? (
              <>
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
                <a
                  href={'/Login'}
                  className='nav-link'
                  onClick={logout}
                >
                  Đăng xuất
                </a>
              </>
            ) : (
              <>
                <Link
                  href={'/Login'}
                  className='nav-link'
                >
                  Đăng nhập
                </Link>
                <Link
                  href={'/Register'}
                  className='nav-link'
                >
                  Đăng Ký
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
