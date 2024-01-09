'use client';
import ButtonBase from '@/components/Buttons/Button';
import { Button, Col, Form, Row } from 'react-bootstrap';
import yourImage from '@/assert/Logo.jpg';
import styles from './registration.module.scss';
const Register = () => {
  const handleRegister = () => {};
  return (
    <Row>
      <Col>
        <div style={{ padding: '20px' }}>
          <div className={styles.infoRegistration}>
            <img
              src='yourImage'
              alt=''
              style={{ width: '20%', height: '20%' }}
            />
            <h2>Đăng ký tài khoản</h2>
            <p>Để tạo tài khoản, vui lòng nhập thông tin bên dưới.</p>
          </div>
          <div className={styles.registrationForm}>
            <Form>
              <Row className='mb-3'>
                <Col>
                  <Form.Control
                    type='text'
                    placeholder='Họ và tên'
                  />
                </Col>
                <Col>
                  <Form.Control
                    type='tel'
                    placeholder='Số điện thoại'
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Form.Control
                    type='password'
                    placeholder='Mật khẩu'
                  />
                </Col>
                <Col>
                  <Form.Control
                    type='password'
                    placeholder='Nhập lại mật khẩu'
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Form.Control
                    type='text'
                    placeholder='Địa chỉ'
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Form.Check
                    type='checkbox'
                    label='Xác nhận kiểm tra thông tin'
                  />
                </Col>
              </Row>
              <Button
                variant='success'
                onClick={handleRegister}
              >
                Đăng ký
              </Button>
            </Form>
            <div className={styles.btnBack}>
              <ButtonBase
                title='Back to home'
                variant='success'
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
