'use client';
import { getProduct } from '@/api/ProductAPI';
import ButtonBase from '@/components/Buttons/Button';
import Loading from '@/components/Loading/loading';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './product.module.scss';
const cx = classNames.bind(styles);

/*
  Page: Product Detail
  Author: UotLT
*/

const ProductDetail = ({ params }: { params: { id: number } }) => {
  const [product, setProduct] = useState<ProductDTO>();

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
  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <table className={cx('product-Table')}>
          <tbody>
            <tr className={cx('product-Title')}>
              <td>Ảnh sản phẩm</td>
              <td>Tên sản phẩm</td>
              <td>Số lượng</td>
              <td>Đơn giá</td>
            </tr>
            <tr className={cx('product-Info')}>
              <td>
                <img
                  className={cx('product-Image')}
                  src={product?.images[0]}
                  alt={product?.fullName}
                />
              </td>

              <td>
                <h1 className={cx('product-Name')}>{product?.fullName}</h1>
                <p className={cx('product-Description')}>{product?.description}</p>
              </td>
              <td>
                <div className={cx('quantity-Container')}>
                  <ButtonBase
                    type='button'
                    title='-'
                    variant='main'
                    size='sm'
                    onClick={handleDecreaseQuantity}
                  />
                  <span className={cx('quantity-Value')}>{quantity}</span>
                  <ButtonBase
                    type='button'
                    title='+'
                    variant='main'
                    size='sm'
                    onClick={handleIncreaseQuantity}
                  />
                </div>
              </td>

              <td>
                <p className={cx('product-Price')}>
                  {product?.price.toLocaleString('vi-VN')}₫
                </p>
              </td>
            </tr>
          </tbody>
          <div className={cx('add-to-cart-button')}>
            <ButtonBase
              type='button'
              title='Thêm vào giỏ hàng'
              variant='main'
              size='md'
              onClick={handleAddToCart}
            />
          </div>
        </table>
      )}
    </div>
  );
};

export default ProductDetail;
