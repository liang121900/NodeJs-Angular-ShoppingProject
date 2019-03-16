var CartController=require('../controller/admin/cart-controller')
module.exports=function(endPoint){

    endPoint.put("/users/:userName/carts",CartController.updateCart);
    endPoint.get("/users/:userName/carts",CartController.getCart);
    //assume username is email (log in by google )
    endPoint.delete("/users/:userName/carts",CartController.clearCartByEmail);
    endPoint.get("/carts/:cartId",CartController.getCartByCartId);
};
