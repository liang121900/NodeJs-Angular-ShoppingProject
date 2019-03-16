export class PaymentDetails {
    paymentType:string; //cash vs card
    creditCardNumber:number;
    creditCardType:string; //mastercard, visa, discover, etc.
    expDate:Date;
    cvv:number; //securityCode
}