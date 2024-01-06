'use client';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import ButtonBase from '@/components/Buttons/Button';

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login page</h1>
      <ButtonBase
        title='Back to home'
        variant='success'
        onClick={() => router.push('/')}
      />
    </div>
  );
};

export default Login;
