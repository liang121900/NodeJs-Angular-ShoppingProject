import { PaymentDetails } from "./paymentDetails";
import { BillingDetails } from "./billingDetails";
import { OrderDetails } from "./orderDetails";

export class OrderPlacedDetials {
    orderId:number;
    orderNotes:string;
    paymentDetails:PaymentDetails;
    billingDetails:BillingDetails;
    orderDetails:OrderDetails;
    orderDate:Date;
}