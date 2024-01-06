'use client'
// App.tsx
import ProductDetailInMenu from '@/components/ProductDetailInMenu/productDetailInMenu';
import ProductItemInMenu from '@/components/ProductItemInMenu/productItemInMenu';
import classNames from 'classnames/bind';
import React, { Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import styles from './menu.module.scss';
const cx = classNames.bind(styles);

interface Product {
    label: string;
    value: string;
}

interface productDetail {
    name: string;
    image: string;
    type: string;
    price: number;
    quantityInStock: number;
}

const Cart = () => {
    const [total, setTotal] = useState(3);
    const updateTotal = (quantity: number) => {
        setTotal((prevTotal) => prevTotal + quantity);
    }
}
const products: Product[] = [
    {
        label: 'Codeeee1',
        value: 'Codeeeeeeeeeeeee',
    },
    {
        label: 'Codeeee2',
        value: 'Codeeeeeeeeeeeee',
    },
    {
        label: 'Codeeee3',
        value: 'Codeeeeeeeeeeeee',
    },
    {
        label: 'Codeeee4',
        value: 'Codeeeeeeeeeeeee',
    },
    {
        label: 'Codeeee5',
        value: 'Codeeeeeeeeeeeee',
    }
];

const productDetails: productDetail[] = [
    {
        name: 'Com chien',
        image: 'data:image/png;base64,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',
        type: 'Com',
        price: 80,
        quantityInStock: 90
    }
];


const App: React.FC = () => {
    function updateTotal(quantity: number): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className={cx('d-flex', 'col-md-12')}>
            <div className={cx('col-md-7', 'mt-4')}>
                <div >
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        value={products[0]}
                        // isDisabled={isDisabled}
                        // isLoading={isLoading}
                        // isClearable={isClearable}
                        // isRtl={isRtl}
                        // isSearchable={isSearchable}
                        name="color"
                        options={products}
                    />
                </div>
                <div>
                    <Fragment>
                        <h3 className={cx('d-flex', 'align-items-center', 'justify-content-center', 'mt-3')}>Sản phẩm</h3>
                        <ProductItemInMenu updateTotal={updateTotal} />
                        <Row>
                            <Col md={3}></Col>
                        </Row>
                    </Fragment>
                </div>
            </div>
            <div className={cx('col-md-1')}></div>
            <div className={cx('col-md-4', 'mt-3')}>
                {productDetails.map((productDetail) => (
                    <ProductDetailInMenu
                        name={productDetail.name}
                        price={productDetail.price}
                        type={productDetail.type}
                        quantityInStock={productDetail.quantityInStock}
                        image={productDetail.image}

                    />
                ))}
            </div>
        </div>
    );

};

export default App;
