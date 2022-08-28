const { response } = require("express");
const { tags, images, Sequelize } = require("../models");
const db = require("../models");
const Tags = db.tags;
const Image = db.image;

//upload tags
const uploadTags = async (req, res) => {
    console.log(req.body)
    try {
        for(var i = 0; i < req.body.length; i++){
        Tags.create({
            name: req.body[i].name,
            type: req.body[i].type
        }).then((tag) => {
            console.log(tag)
        })};
        res.send(
           "done" 
        )
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying post tags: ${error}`)
    }
};

// return uploaded tags per image to gallery
const getTagsforImage = async (req, res) => {
    console.log(req.body)
    try {
        const filterImageId = `${req.body.id}`;
        const getTagsbyImageId = await Tags.findAll({
            include: [{
                model: Image,
                attributes: ['id', 'name'],
                where: Sequelize.literal(`id.name = '${filterImageId}'`)
            }]
        }).then(res.json({ success: true, data: getTagsbyImageId }));

    }
    catch (error) {
        console.log(error);
        return res.send(`Error when trying to return tags: ${error}.`);
    }
}

module.exports = {
    uploadTags,
    getTagsforImage
};