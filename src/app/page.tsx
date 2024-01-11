'use client';
import { getMenuToday } from '@/api/MenuAPI';
import Loading from '@/components/Loading/loading';
import ProductItem from '@/components/ProductItem/productItem';
import VoucherItem from '@/components/VoucherItem/voucherItem';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './home.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const cx = classNames.bind(styles);

/*
  Page: Home
  Author: HieuTTN
*/

interface ImageSlide {
  id: number;
  imageSrc: string;
}

interface Voucher {
  code: string;
  description: string;
  imageSrc: string;
}
const vouchers: Voucher[] = [
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeee',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe8GqNZgenp7lDROxS_eOqvySZJqiz5uA7g&usqp=CAU'
  },
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeee',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe8GqNZgenp7lDROxS_eOqvySZJqiz5uA7g&usqp=CAU'
  },
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeee',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe8GqNZgenp7lDROxS_eOqvySZJqiz5uA7g&usqp=CAU'
  },
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeee',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe8GqNZgenp7lDROxS_eOqvySZJqiz5uA7g&usqp=CAU'
  },
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeee',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe8GqNZgenp7lDROxS_eOqvySZJqiz5uA7g&usqp=CAU'
  },
  {
    code: 'Codeeee',
    description: 'Codeeeeeeeee',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe8GqNZgenp7lDROxS_eOqvySZJqiz5uA7g&usqp=CAU'
  }
];
export default function Home() {
  const [menu, setMenu] = useState<MenuDTO[]>();

  const {
    isPending,
    isError,
    data: results,
    error
  } = useQuery({
    queryKey: ['menuToday'],
    queryFn: async () => {
      const data = await getMenuToday();
      return data;
    }
  });

  if (!isPending && results?.data !== undefined && results?.data !== menu) {
    setMenu(results?.data);
  }

  const imageSlides: ImageSlide[] = [
    { id: 1, imageSrc: 'https://static-images.vnncdn.net/files/publish/2022/11/27/mang-che-do-den-viet-nam-ra-ban-tai-cho-o-chau-phi-nguoi-dan-phan-ung-sao-e54697fdc54145239d9e5852c722ce05.jpeg' },
    { id: 2, imageSrc: 'https://i.ytimg.com/vi/8gpuEE3C86c/maxresdefault.jpg' },
    { id: 3, imageSrc: 'https://cuoituancuatui.com/wp-content/uploads/mon-sam-bo-luong-qua-hap-dan.jpg' },
  ];

  // Cấu hình slider
  const sliderHomeSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Điều chỉnh số item hiển thị trên mỗi dòng
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Cấu hình slider
  const sliderVoucherSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Điều chỉnh số item hiển thị trên mỗi dòng
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200, // Điều chỉnh số item hiển thị khi màn hình có chiều rộng < 1200px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Điều chỉnh số item hiển thị khi màn hình có chiều rộng < 992px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Điều chỉnh số item hiển thị khi màn hình có chiều rộng < 576px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // <div className={cx('container')}>
    //   <h3 className={cx('mt-5', 'text-center', 'text-title-color', 'f-bold', 'font-arial', 'fs-xxl')}>Hôm nay ăn gì?</h3>
    //   <h4 className={cx('mt-2', 'font-arial', 'fw-700')}>Voucher</h4>
    //   <div className={cx('mt-3', 'row', 'justify-content-center')}>
    //     {vouchers.map(voucher => (
    //       <VoucherItem
    //         imageSrc={voucher.imageSrc}
    //         code={voucher.code}
    //         description={voucher.description}
    //       />
    //     ))}
    //   </div>

    <div className={cx('container')}>
      {/* Hiển thị Slider ảnh đầu tiên */}
      <div className={cx('slick-slide')}>
        <Slider {...sliderHomeSettings}>
          {imageSlides.map(slide => (
            <div key={slide.id}>
              <img src={slide.imageSrc} alt={`Slide ${slide.id}`} />
            </div>
          ))}
        </Slider>
      </div>
      <h3 className={cx('mt-5', 'text-center', 'text-title-color', 'f-bold', 'font-arial', 'fs-xxl')}>Hôm nay ăn gì?</h3>
      <h4 className={cx('mt-2', 'font-arial', 'fw-700')}>Mã giảm giá</h4>
      <div className={cx('mt-3')}>
        {/* Sử dụng Slider ở đây */}
        <Slider {...sliderVoucherSettings}>
          {vouchers.map(voucher => (
            <VoucherItem
              key={voucher.code}
              imageSrc={voucher.imageSrc}
              code={voucher.code}
              description={voucher.description}
            />
          ))}
        </Slider>
      </div>

      {/* <div className={cx('d-flex', 'mt-5', 'main-color')}>
        <Navbar.Brand>
          <Link
            href={'/'}
            className={cx('me-5', 'navbar-brand', 'fz-20')}
          >
            Tất cả
          </Link>
          <Link
            href={'/'}
            className={cx('me-5', 'navbar-brand', 'fz-20')}
          >
            Bán chạy nhất
          </Link>
          <Link
            href={'/'}
            className={cx('me-5', 'navbar-brand', 'fz-20')}
          >
            Nước
          </Link>
          <Link
            href={'/'}
            className={cx('me-5', 'navbar-brand', 'fz-20')}
          >
            Combo
          </Link>
          <Link
            href={'/'}
            className={cx('me-5', 'navbar-brand', 'fz-20')}
          >
            Thức ăn nhanh
          </Link>
        </Navbar.Brand>
      </div> */}
      <h4 className={cx('mt-5', 'font-arial', 'fw-700')}>Sản phẩm</h4>
      <div className={cx('row', 'justify-content-center')}>
        {isPending ? (
          <Loading />
        ) : menu && menu.length > 0 ? (
          menu.map(item =>
            item.quantity > 0 ? (
              <ProductItem
                key={item.productID}
                productId={item.productID}
                name={item.fullName ? item.fullName : ''}
                imageSrc={item.images ? item.images[0] : ''}
                price={item.price ? item.price : 0}
              />
            ) : null
          )
        ) : (
          <p className={cx('font-arial', 'fw-700', 'd-flex', 'align-items-center', 'justify-content-center', 'mt-3', 'fs-lg')}>Rất tiếc, hôm nay không còn sản phẩm nào!</p>
        )}
      </div>
    </div>
  );
}
