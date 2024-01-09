'use client';
import ButtonBase from '@/components/Buttons/Button';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from './login.module.scss';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginAPI } from '@/api/AuthAPI';
import { toast } from 'react-toastify';

const Login = () => {
  const [login, setLogin] = useState<LoginDTO>();

  const mutationLogin = useMutation({
    mutationFn: (login: LoginDTO) => {
      return loginAPI(login);
    },
    onSuccess: (data, variables, context) => {
      localStorage.setItem('account', JSON.stringify(data.data));
    }
  });

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const temp: LoginDTO = {
      phone: value,
      password: login?.password ? login.password : ''
    };

    console.log(value);

    setLogin(temp);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const temp: LoginDTO = {
      phone: login?.phone ? login.phone : '',
      password: value
    };

    setLogin(temp);
  };

  const handleLogin = () => {
    console.dir(login);
    if (login) {
      mutationLogin.mutate(login);
    } else {
      toast.error('Sai SĐT hoặc Mật Khấu');
    }
  };

  return (
    <Row className={`justify-content-center`}>
    <Col xs={12} md={8} lg={6}>
      <div className={styles.infoLogin}>
        <img src='' alt='' style={{ width: '20%', height: '20%' }} />
        <h2>Đăng nhập tài khoản</h2>
        <p>Hãy đăng nhập để mua sản phẩm!</p>
      </div>
      <div className={styles.loginForm}>
        <Form>
          <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
            <Col>
              <Form.Control
                type='phone'
                placeholder='Phone'
                value={login?.phone}
                onChange={handlePhoneChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className='mb-3'
            controlId='formPlaintextPassword'
          >
            <Col>
              <Form.Control
                type='password'
                placeholder='Password'
                value={login?.password}
                onChange={handlePasswordChange}
              />
            </Col>
          </Form.Group>
          <p>
            Bạn quên mật khẩu? <a href='#'>Nhấn vào đây</a>
          </p>
          <Button variant='success' onClick={handleLogin}>
            Đăng nhập
          </Button>
          <p>
            Bạn chưa có tài khoản?{' '}
            <a href='#'>Nhấn vào đây để đăng kí</a>
          </p>
        </Form>
        <div className={styles.btnBack}>
          <ButtonBase
            title='Back to home'
            variant='success'
            onClick={handleLogin}
          />
        </div>
      </div>
    </Col>
  </Row>
  );
};

export default Login;
