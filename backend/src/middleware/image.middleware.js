const multer = require("multer");

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/jpeg") || file.mimetype.startsWith("image/jpg") || file.mimetype.startsWith("image/png")) {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/image");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-migr-ai-tion-${file.originalname}`);

    }
});
//place limits? filesize etc
var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile; 
