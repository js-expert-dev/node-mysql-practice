const defaultResponse = require('../utils/defaultResponse');
const CONSTANTS = require('../utils/constants');
const responseCodes = require('../utils/responseCodes');
const CategoryModel = require('../models/categoryModel');


exports.create = async function (req, res) {
    try {
        const requestBody = req.body;
        const category = await CategoryModel.create(requestBody);
        defaultResponse().success(CONSTANTS.DATA_CREATED_SUCCESS, category, res, responseCodes.SUCCESS_CREATED);

    } catch (error) {
        defaultResponse().error({
            message: error.message
        }, res, responseCodes.SERVER_ERROR);
    }
}