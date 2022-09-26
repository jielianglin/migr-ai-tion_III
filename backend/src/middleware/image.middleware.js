const multer = require("multer");
// const bodyParser = require('body-parser');

// const imageFilter = (req, file, cb) => {
//     var jsonData = req.body;
//     console.log('Multer middleware req body', req.body);
//     if (jsonData !== undefined) {
//         cb(null, true);
//     } else {
//         cb("Image field is missing.", false);
//     }

//     if (file.mimetype.startsWith("image/jpeg") || file.mimetype.startsWith("image/jpg") || file.mimetype.startsWith("image/png")) {
//         cb(null, true);
//     } else {
//         cb("Please upload only images.", false);
//     }
// };

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, __basedir + "/resources/static/assets/uploads/image");
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-migr-ai-tion-${file.originalname}`);

//     }
// });

// //place limits? filesize etc
// var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
// module.exports = uploadFile;
const DIR = './resources/static/assets/uploads/'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-')
       cb(null, `${Date.now()}-migr-ai-tion-${fileName}`)

    },
})

var upload = multer({
    limits: {
        fieldSize: 25*1024*1024
    },
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg'
        ) {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
    },
})

// var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = upload
