const { response } = require("express");
const db = require("../models");
const Tags = db.tags;

//upload tags
const uploadTags = async (req, res) => {
    try {
        Tags.create().then((tag) => {
            res.json(tag)
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying post tags: ${error}`)
    }
};

// return uploaded tags per image to gallery
const getTagsforImage = async (req, res) => {
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
        console.log(err);
        return res.send(`Error when trying to return tags: ${error}.`);
    }
}

module.exports = {
    uploadTags,
    getTagsforImage
};