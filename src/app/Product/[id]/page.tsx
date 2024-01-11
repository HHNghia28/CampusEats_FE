'use client';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getProduct } from '@/api/ProductAPI';
import ButtonBase from '@/components/Buttons/Button';
import Loading from '@/components/Loading/loading';
import styles from './product.module.scss';
const cx = classNames.bind(styles);

/*
  Page: Product Detail
  Author: UotLT
*/

const ProductDetail = ({ params }: { params: { id: number } }) => {
  const [product, setProduct] = useState<ProductDTO>();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCustomer = localStorage.getItem('account');
      if (!storedCustomer) {
        router.push('/Login');
      }
    }
  }, []);

  const {
    isPending,
    isError,
    data: results,
    error
  } = useQuery({
    queryKey: ['product', params.id],
    queryFn: async () => {
      const data = await getProduct(params.id);
      return data;
    }
  });

  if (!isPending && results?.data !== undefined && results?.data !== product) {
    setProduct(results?.data);
  }

  const [quantity, setQuantity] = React.useState(1);

  const showToastSuccess = () => {
    toast.success('Success message!');
  };

  const handleAddToCart = () => {
    if (product != undefined) {
      const orderDetail: OrderDetailDTO = {
        productId: product.id,
        price: product.price ? product.price : 0,
        quantity: quantity,
        categogyName: product.categoryName,
        description: product.description,
        fullName: product.fullName,
        images: product.images,
        note: ''
      };

      if (typeof window !== 'undefined') {
        const cart: OrderDetailDTO[] = JSON.parse(localStorage.getItem('cart') || '[]');

        const existingItemIndex = cart.findIndex(
          item => item.productId === orderDetail.productId
        );

        if (existingItemIndex !== -1) {
          cart[existingItemIndex].quantity += orderDetail.quantity;
        } else {
          cart.push(orderDetail);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }

    console.log('Product added to cart');
    toast.success('Success message!');
  };

  const handleBuyNow = () => {
    console.log('Buy now clicked');
    toast.success('Success message!');
  };

  const handleIncreaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      toast.error('Cannot add more than 10 products!');
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const formatPrice = (number: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(number);
  };
  return (
    <div className={cx('container', 'body')}>
      <div className={cx('col-12')}>
        <p
          className={cx('d-flex', 'text-start', 'pt-4', 'fs-xl-title', 'fw-600')}
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Chi tiết sản phẩm
        </p>
      </div>
      {isPending ? (
        <Loading />
      ) : (
        <div className={cx('product-image')}>
          <div className={cx('product-Container', 'col-6')}>
            <div className={cx('p-3', 'col-6', 'product-image')}>
              <img
                className={cx('product-Image')}
                src={product?.images[0]}
                alt={product?.fullName}
              />
            </div>

            <div className={cx('col-5', 'd-flex', 'flex-wrap', 'pl-20', 'product-image')}>
              <div className={cx('product-Details', 'col-12', 'product-item')}>
                <h1 className={cx('product-Name', 'col-12', 'product-title')}>
                  {product?.fullName}
                </h1>
                <p className={cx('product-Price', 'col-12', 'product-title')}>
                  {formatPrice(product?.price ? product.price : 0)}
                </p>
                <p
                  className={cx(
                    'product-Information',
                    'col-12',
                    'product-title',
                    'px-10'
                  )}
                >
                  {product?.description}
                </p>
              </div>
              <div
                className={cx('quantity-Container', 'col-12', 'body', 'product-title')}
              >
                <div
                  className={cx(
                    'quantity-Container',
                    'col-5',
                    'body',
                    'product-title',
                    'mb-3'
                  )}
                >
                  <div className={cx('me-3')}>
                    <ButtonBase
                      type='button'
                      title='-'
                      variant='main'
                      size='sm'
                      onClick={handleDecreaseQuantity}
                    />
                  </div>
                  <span className={cx('quantity-Value', 'me-3', 'mt-1')}>{quantity}</span>
                  <div className={cx()}>
                    <ButtonBase
                      type='button'
                      title='+'
                      variant='main'
                      size='sm'
                      onClick={handleIncreaseQuantity}
                    />
                  </div>
                </div>

                <div className={cx('col-7', 'mb-3')}>
                  <ButtonBase
                    type='button'
                    title='Thêm vào giỏ hàng'
                    variant='main'
                    size='md'
                    onClick={handleAddToCart}
                  />
                  {/* <ButtonBase
                type='button'
                title='Buy Now'
                variant='main'
                size='md'
                onClick={handleBuyNow}
              /> */}
                </div>
              </div>
            </div>
            <div className={cx('col-1')}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
