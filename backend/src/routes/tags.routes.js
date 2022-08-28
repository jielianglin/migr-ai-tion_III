const express = require("express");
const router = express.Router();

const tagsController = require("../controllers/tags.controller");
const tagsUpload = require("../middleware/tags");
let routes = (app) => {
    router.get('/tags', tagsController.getTagsforImage);
    router.post('/tags', tagsUpload.none('uploaded_image'), tagsController.uploadTags);
    return app.use("/", router);
};
module.exports = routes;