const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const imageMiddleware = require("./image.middleware");
const annotationMiddleware = require("./annotation.middleware");
const tagsMiddleware = require("./tags.middleware");
const textMiddleware = require("./text.middleware");

module.exports = {
    authJwt,
    verifySignUp,
    imageMiddleware,
    annotationMiddleware,
    tagsMiddleware,
    textMiddleware
};