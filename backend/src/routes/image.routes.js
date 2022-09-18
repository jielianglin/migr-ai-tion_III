// var multer = require("multer");

const express = require("express");
const router = express.Router();

const imageController = require("../controllers/image.controller");
const imageMiddleware = require("../middleware/image.middleware");
// const upload = multer({ dest: "./" });

let routes = (app) => {
    router.get("/image", imageController.getImagesbyTags);
    //below needs to be tested
    router.post("/image", imageMiddleware.single("file"), imageController.uploadImages);
    //below is working
    // router.post("/image", upload.single("file"), imageController.uploadImages);
    return app.use("/", router);
};
module.exports = routes;