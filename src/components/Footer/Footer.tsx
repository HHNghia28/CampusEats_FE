'use client';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import ButtonBase from '../Buttons/Button';
import Image from 'next/image';
const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className='c-bg-main text-white py-5 mt-5'>
      <Container>
        <Row>
          {/* Email Feedback Column */}
          <Col md={5}>
            <Image
              src='/Logo_Brand.png'
              alt='Logo'
              width={150}
              height={38}
            ></Image>
            <div className='mt-4'>
              <h2 className='fs-lg font-bold mb-3'>ĐĂNG KÝ NHẬN THÔNG TIN KHUYẾN MÃI</h2>
              <Form>
                <Form.Group
                  controlId='emailFeedback'
                  className='mb-2'
                >
                  <InputGroup>
                    <Form.Control
                      type='email'
                      placeholder='Nhập email'
                      className='py-2 px-3 border rounded m-2'
                    />
                    <Button
                      variant='success'
                      type='submit'
                      className='py-2 px-3 rounded bg-blue-500 hover:bg-blue-600 transition-all duration-300 m-2'
                    >
                      Gửi
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Form>
            </div>
          </Col>

          {/* Information Column */}
          <Col md={2}>
            <h2 className='fs-lg font-bold mb-3'>THÔNG TIN</h2>
            <ul className='list-unstyled'>
              <li>Tin tức</li>
              <li>Khuyến mãi</li>
              <li>Tuyển dụng</li>
              <li>Nhượng quyền</li>
            </ul>
          </Col>

          {/* Support Column */}
          <Col md={2}>
            <h2 className='fs-lg font-bold mb-3'>HỖ TRỢ</h2>
            <ul className='list-unstyled'>
              <li>Điều khoản sử dụng</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách giao hàng</li>
              <li>Chăm sóc khách hàng</li>
            </ul>
          </Col>
          <Col md={3}>
            <h2 className='fs-lg font-bold mb-3'>THEO DỖI</h2>
            <ul className='list-unstyled'>
              <li>Facebook</li>
              <li>Zalo</li>
              <li>Instagram</li>
              <li>Email: g1food@gmail.com</li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <div className='mt-4 text-center'>
          <p>&copy; 2024 G1-FOOD. All rights reserved by FPT University.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
