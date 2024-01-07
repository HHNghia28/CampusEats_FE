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
              href={'/Wiki'}
              className='nav-link'
            >
              Wiki
            </Link>
            <Link
              href={'/About'}
              className='nav-link'
            >
              About
            </Link>
            <Link
              href={'/Cart'}
              className='nav-link'
            >
              Cart
            </Link>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
