interface PaymentLinkDTO {
    paymentId: string;
    paymentUrl: string;
    order?: OrderDTO;  
}