interface CreatePaymentDTO {
    paymentContent?: string;
    paymentCurrency?: string;
    requiredAmount?: number;
    paymentDate?: Date;
    expireDate?: Date;
    paymentLanguage?: string;
    // paymentDestinationId?: string;
}
