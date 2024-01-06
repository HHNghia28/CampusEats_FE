'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonBase from '@/components/Buttons/Button';
const Register = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Register page</h1>
      <ButtonBase
        title='Back to home'
        variant='success'
        onClick={() => router.push('/')}
      />
    </div>
  );
};

export default Register;
