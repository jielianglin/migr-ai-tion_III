const { response } = require("express");
const fs = require("fs");
const { tags, Sequelize } = require("../models");
const db = require("../models");
const Image = db.image;
const Tags = db.tags;

//upload images
const uploadImages = async (req, res) => {
    console.log(req);
    try {
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            image_data: fs.readFileSync(
                __basedir + "/resources/static/assets/uploads/image" + req.file.filename
            ),
            //converting annotation to base64
            annotation_data: Buffer(fs.readFileSync(
                __basedir + "/resources/static/assets/uploads/annotation" + req.file.filename
            )).toString('base64'),
            description: req.body.description,
        }).then((image) => {
            fs.writeFileSync(
                __basedir + "/resources/static/assets/tmp/image" + image.name,
                image.image_data, image.annotation_data, image.description,
            );
            return res.sent(`File has been uploaded`);
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`)
    }
};
//fetch images according to tags
const getImagesbyTags = async (req, res) => {
    try {
        //query the value of the search
        const filterTagName = `${req.query}`;
        const getImagesbyTags = await Image.findAll({
            include: [{
                model: Tags,
                attributes: ['id', 'name', 'image_data', 'annotation_data', 'description'],
                where: Sequelize.literal(`tags.name = '${filterTagName}'`)
            }]

        }).then(res.json({ success: true, data: getImagesbyTags }));

        if (Image == null) {
            res.status(400).send({ message: 'no images available' });
        }


    }
    catch (error) {
        console.log(error);
        return res.send(`Error when trying to get images: ${error}.`);
    }
}
//userboard
//fetch images according to user

const getImagesbyUser = async (req, res) => {
    try {
        //querying images by user_id
        console.log(req.body.user);
        const filterUserId = `${req.body.user}`;
        const getImagesbyUser = await Image.findAll({
            include: [{
                model: User,
                attributes: ['id', 'username'],
                where: Sequelize.literal(`user.id = '${filterUserId}'`)
            }]
        });

        if (Image == null) {
            res.status(400).send({ message: 'no images available' });
        }
        res.send('/uploads/' + getImagesbyUser + '/' + file);
    }
    catch (error) {
        console.log(error);
        return res.send(`Error when trying to get images: ${error}.`);
    }
}
module.exports = {
    getImagesbyTags,
    uploadImages,
    getImagesbyUser
};