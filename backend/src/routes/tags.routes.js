const express = require("express");
const router = express.Router();

const tagsController = require("../controllers/tags.controller");
const tagsUpload = require("../middleware/tags.middleware");

let routes = (app) => {
    router.get("/tags", tagsController.getTagsforImage);
    router.post('/tags', tagsUpload.none('uploaded_tags'), tagsController.uploadTags);
    return app.use("/", router);
};
module.exports = routes;