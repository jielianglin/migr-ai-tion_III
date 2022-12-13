const multer = require("multer"); // multer is a node middleware for handling multipart form data like images
const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/annotation");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-migr-ai-tion-${file.originalname}`);

    }
});
var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile; 