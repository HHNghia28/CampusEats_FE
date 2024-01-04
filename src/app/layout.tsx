import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../styles/global.scss';
import { Container } from 'react-bootstrap';
import Footer from '@/components/Footer/Footer';
import Home from './page';
import Navigation from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        <Container>{children}</Container>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
