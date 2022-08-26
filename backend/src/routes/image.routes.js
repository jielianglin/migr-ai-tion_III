const express = require("express");
const router = express.Router();

const imageController = require("../controllers/image.controller");
const imageUpload = require("../middleware/image.middleware");
let routes = (app) => {
    router.get("/image.controller", imageController.getImagesbyTags);
    router.post("/image.controller", imageUpload.array('uploaded_image', 2), imageController.uploadImages);
    return app.use("/", router);
};
module.exports = routes;