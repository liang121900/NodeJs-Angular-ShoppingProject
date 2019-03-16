export class OrderDetails {
    items:Item[];
    subtotal:number;
    shippingCharge:number;
    tax:number;
    discount:number;
    total:number
}

export class Item {
    pid:string;
    quantity:number;
    unitPrice:number;
}