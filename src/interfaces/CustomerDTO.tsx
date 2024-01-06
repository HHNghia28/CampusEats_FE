interface CustomerDTO {
    id: number;
    code: string;
    name: string;
    gender?: boolean;
    birthdate?: Date;
    contactNumber: string;
    address: string;
    locationName: string;
    email: string;
    organization: string;
    comment: string;
    taxCode: string;
    debt: number;
    totalInvoiced?: number;
    totalPoint?: number;
    totalRevenue?: number;
}
