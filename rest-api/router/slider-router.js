var SliderController = require('../controller/admin/slider-controller');

module.exports=function(endpoint) {
    endpoint.get("/admin/slider",SliderController.findSlider);
    endpoint.put("/admin/slider",SliderController.updateSlider);
    endpoint.patch("/admin/slider",SliderController.patchSlider);
    endpoint.post("/admin/slider",SliderController.saveSlider);
}