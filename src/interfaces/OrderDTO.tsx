interface OrderDTO {
    id?: string;
    orderId?: number;
    code?: string;
    branchId: number;
    customerId: number;
    receiver: string;
    contactNumber: string;
    address: string;
    locationName: string;
    status?: string;
    details?: OrderDetailDTO[];
}
