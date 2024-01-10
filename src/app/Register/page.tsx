'use client';
import ButtonBase from '@/components/Buttons/Button';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from './registration.module.scss';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { addCustomer } from '@/api/CustomerAPI';
import { useRouter } from 'next/navigation';

const fakeRegister: CustomerRequest = {
  address: 'Test',
  comment: '',
  contactNumber: 'test1',
  email: 'test1@gmail.com',
  gender: true,
  name: 'Test 1',
  password: '123',
  birthDate: new Date(),
  code: ''
};

const Register = () => {
  const router = useRouter();
  const [register, setRegister] = useState<CustomerRequest>(fakeRegister);
  const [password, setPassword] = useState<string>(fakeRegister.password);
  const [isValid, setIsValid] = useState<boolean>(false);

  const mutationRegister = useMutation({
    mutationFn: (register: CustomerRequest) => {
      return addCustomer(register);
    },
    onSuccess: (data, variables, context) => {
      if(data.success) {
        toast.success("Đăng ký thành công");
        router.push('/Login');
      } else {
        toast.error(data.message);
      }
    },
    onError: () => {
      toast.error("Đăng ký không thành công");
    }
  });

  const handleRegister = () => {
    if(isValid) {
      console.dir(register);
      mutationRegister.mutate(register);
    } else {
      toast.error('Mật khẩu không khớp');
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  
    setRegister(prevRegister => ({
      ...prevRegister,
      name: value
    }));
  };  

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setRegister(prevRegister => ({
      ...prevRegister,
      contactNumber: value
    }));
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setRegister(prevRegister => ({
      ...prevRegister,
      address: value
    }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setPassword(value);
  };

  const handleRePasswordBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
  
    if (value !== password) {
      toast.error('Mật khẩu không khớp');
      setIsValid(false);
    } else {
      setIsValid(true);
      setRegister(prevRegister => ({
        ...prevRegister,
        password: value
      }));
    }
  };

  const handleRePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setRegister(prevRegister => ({
      ...prevRegister,
      password: value
    }));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setRegister(prevRegister => ({
      ...prevRegister,
      email: value
    }));
  };

  return (
    <Row>
      <Col md={6}>
        <img
          src='data:image/jpeg;base64,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'
          alt='Illustration'
          style={{ width: '100%', height: '100%' }}
        />
      </Col>
      <Col md={6}>
        <div style={{ padding: '20px' }}>
          <div className={styles.infoRegistration}>
            <img
              src='data:image/jpeg;base64,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'
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
                    value={register?.name}
                    onChange={handleNameChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type='tel'
                    placeholder='Số điện thoại'
                    value={register?.contactNumber}
                    onChange={handlePhoneChange}
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    value={register.email}
                    onChange={handleEmailChange}
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Form.Control
                    type='password'
                    placeholder='Mật khẩu'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type='password'
                    placeholder='Nhập lại mật khẩu'
                    value={register?.password}
                    onChange={handleRePasswordChange}
                    onBlur={handleRePasswordBlur}
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Form.Control
                    type='text'
                    placeholder='Địa chỉ'
                    value={register?.address}
                    onChange={handleAddressChange}
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
                variant='primary'
                onClick={handleRegister}
              >
                Đăng ký
              </Button>
            </Form>
          </div>
          <div className={styles.btnBack}>
            <ButtonBase
              title='Back to home'
              variant='success'
              onClick={() => {}}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
