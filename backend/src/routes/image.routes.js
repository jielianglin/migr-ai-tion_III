const express = require("express");
const router = express.Router();

const imageController = require("../controllers/image.controller");
const imageUpload = require("../middleware/image.middleware");
let routes = (app) => {
    router.get("/image", imageController.getImagesbyTags);
    router.post("/image", imageController.uploadImages);
    return app.use("/", router);
};
module.exports = routes;