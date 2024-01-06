interface OrderDetailDTO {
    id?: string;  
    orderId?: string;
    productId: number;
    price: number; 
    quantity: number;
    note?: string;
    categogyName?: string;
    fullName?: string;
    description?: string;
    images?: string[]; 
}
