const defaultResponse = require('../utils/defaultResponse');
const CONSTANTS = require('../utils/constants');
const responseCodes = require('../utils/responseCodes');
const Category = require('../models').Category;


exports.create = (req, res) => {
    return Category.create(req.body).then((result) => res.status(200).json(result)).catch((err) => res.status(500).json(err))
}