import { TechSpec } from "./techSpec";

export class Product{
    pid:string;
    sku:string;
  
    title:string;
  
    category:string;
    brands:string;
  
    price: number;
    sprice:number;
    rewardPoints:number;
    stock:string;
  
    color:string;
    size:number;
    weight:number;
  
    vendorName:string;
    rating:number;
    items:number;
    imageURL:string;
    overview:string;
    description:string;
    features:string;
    reviews:string;
    techSpecs:TechSpec[]=[];  

    qty:number;
    itemPriceTotal:number;
}