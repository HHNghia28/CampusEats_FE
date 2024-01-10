'use client';
import ButtonBase from '@/components/Buttons/Button';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from './login.module.scss';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginAPI } from '@/api/AuthAPI';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [login, setLogin] = useState<LoginDTO>();

  const mutationLogin = useMutation({
    mutationFn: (login: LoginDTO) => {
      return loginAPI(login);
    },
    onSuccess: (data, variables, context) => {

      localStorage.setItem('account', JSON.stringify(data.data));

      if (data.success) {
        localStorage.setItem('account', JSON.stringify(data.data));
        toast.success('Đăng nhập thành công');
        router.push('/');
      } else {
        toast.error(data.message);
      }
    },
    onError: () => {
      toast.error('Đăng nhập không thành công');

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
      <Col
        xs={12}
        md={8}
        lg={6}
      >
        <div className={styles.infoLogin}>
          <img
            src='data:image/jpeg;base64,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'
            alt=''
          />
          <h2>Đăng nhập tài khoản</h2>
          <p>Hãy đăng nhập để mua sản phẩm!</p>
        </div>
        <div className={styles.loginForm}>
          <Form>
            <Form.Group
              as={Row}
              className='mb-3'
              controlId='formPlaintextEmail'
            >
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
            <Button
              size='lg'
              variant=''
              onClick={handleLogin}
            >
              Đăng nhập
            </Button>
            <p>
              Bạn chưa có tài khoản? <a href='#'>Nhấn vào đây để đăng ký</a>
            </p>
          </Form>
          <div className={styles.btnBack}>
            <ButtonBase
              title='Trở về'
              variant=''
              onClick={handleLogin}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
