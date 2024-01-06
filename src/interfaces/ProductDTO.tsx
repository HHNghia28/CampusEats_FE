interface ProductDTO {
    id: number;
    code: string;
    retailerId: number;
    name: string;
    categoryId: number;
    categoryName: string;
    productType?: number;
    fullName: string;
    description: string;
    orderTemplate: string;
    price?: number;
    images: string[];
}
