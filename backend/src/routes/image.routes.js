// var multer = require("multer");

const express = require("express");
const router = express.Router();

const imageController = require("../controllers/image.controller");
const upload = require("../middleware/image.middleware");

let routes = (app) => {
    router.get("/images", imageController.getImagesbyTags);
    //below needs to be tested
    router.post("/images",
        upload.single("file"),
        imageController.uploadImages);
    //below is working
    // router.post("/image", upload.single("file"), imageController.uploadImages);
    return app.use("/", router);
};
module.exports = routes;