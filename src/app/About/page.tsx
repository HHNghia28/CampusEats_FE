'use client';
import ButtonBase from '@/components/Buttons/Button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from 'react-bootstrap';

const About = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <h1>About page</h1>
      </div>
      <ButtonBase
        title='Back to home'
        variant='success'
        onClick={() => router.push('/')}
      />
    </div>
  );
};

export default About;
