var BlogController=require('../controller/admin/blog-controller')
module.exports=function(endPoint){

    endPoint.get("/admin/blogs",BlogController.findAllBlogs);
    endPoint.get("/admin/blogs/:bid",BlogController.findBlogByBid);
    endPoint.post("/admin/blogs",BlogController.addBlog);
    endPoint.post("/admin/blogs/:bid/comments",BlogController.postComment);
    endPoint.put("/admin/blogs/:bid",BlogController.updateBlog);
    endPoint.patch("/admin/blogs/:bid",BlogController.patchBlog);
    endPoint.delete("/admin/blogs/:bid",BlogController.deleteBlog);
}