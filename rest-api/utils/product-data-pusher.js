var ProductEntity=require('../model/product-entity');
/**
 * pid: { type: String,required: true, unique: true },
 * title: { type: String},
 * category: { type: String},
 * ratings: { type: Number},
 * reviews: { type: Array[String] },
 * price: { type: Number},
 * sprice: { type: Number}, 
 * imageUrl: { type:String },
 */
module.exports=()=>{
    var p1=new ProductEntity();
    p1.pid="P101";
    p1.title="Wireless Charger";
    p1.category="Electronics";
    p1.ratings=4.38;
    p1.reviews=["1","2","3"];
    p1.price=45.35;
    p1.sprice=69.99;
    p1.imageUrl="products/electronics/04.jpg";
    p1.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });

    var p2=new ProductEntity();
    p2.pid="P102";
    p2.title="High Top Sneakers";
    p2.category="Shoes";
    p2.ratings=3.89;
    p2.reviews=["1","2"];
    p2.price=40.00;
    p2.sprice=59.99;
    p2.imageUrl="products/shoes/06.jpg";
    p2.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });
    

    var p3=new ProductEntity();
    p3.pid="P103";
    p3.title="Electric Shaver";
    p3.category="Beauty";
    p3.ratings=3.25;
    p3.reviews=["1","2","3","4","5","6","7"];
    p3.price=54.99;
    p3.sprice=88.24;
    p3.imageUrl="products/beauty/10.jpg";
    p3.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });

    var p4=new ProductEntity();
    p4.pid="P104";
    p4.title="Apple Watch";
    p4.category="Electronics";
    p4.ratings=4.00;
    p4.reviews=["1","2","3","4","5","6","7"];
    p4.price=279.00;
    p4.sprice=279.00;
    p4.imageUrl="products/electronics/10.jpg";
    p4.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });

    var p5=new ProductEntity();
    p5.pid="P105";
    p5.title="TCL 55-Inch TV";
    p5.category="Electronics";
    p5.ratings=4.15;
    p5.reviews=["1","2","3","4"];
    p5.price=379.99;
    p5.sprice=599.99 ;
    p5.imageUrl="products/electronics/07.jpg";
    p5.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });

    var p6=new ProductEntity();
    p6.pid="P106";
    p6.title="Women's Sweater";
    p6.category="Fashion";
    p6.ratings=4.67;
    p6.reviews=["1","2","3","4","5","6"];
    p6.price=37.00;
    p6.sprice=40.00;
    p6.imageUrl="products/fashion/04.jpg";
    p6.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });

    var p7=new ProductEntity();
    p7.pid="P107";
    p7.title="Men's Sweater";
    p7.category="Fashion";
    p7.ratings=5.00;
    p7.reviews=["1"];
    p7.price=89.00;
    p7.sprice=89.00;
    p7.imageUrl="products/fashion/03.jpg";
    p7.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });

    var p8=new ProductEntity();
    p8.pid="P108";
    p8.title="HP Laptop";
    p8.category="Electronics";
    p8.ratings=4.50;
    p8.reviews=["1"];
    p8.price=628.00;
    p8.sprice=628.00;
    p8.imageUrl="assets/img/product-offer/06.jpg";
    p8.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });

    var p9=new ProductEntity();
    p9.pid="P109";
    p9.title="Beats Headphones";
    p9.category="Electronics";
    p9.ratings=4.20;
    p9.reviews=["1","2","3","4","5","6","7","8"];
    p9.price=299.99;
    p9.sprice=349.95;
    p9.imageUrl="products/electronics/09.jpg";
    p9.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });

    var p10=new ProductEntity();
    p10.pid="P110";
    p10.title="Lightweight Headphones";
    p10.category="Electronics";
    p10.ratings=3.18;
    p10.reviews=["1","2","3","4","5"];
    p10.price=13.00;
    p10.sprice=15.00;
    p10.imageUrl="products/electronics/02.jpg";
    p10.save((err)=>{
        if (err)
            console.log("Product is already created.");
        else
            console.log("Product has been created!!!");
    });
}