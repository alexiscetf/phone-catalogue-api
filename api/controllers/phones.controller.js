'use strict';

const _ = require('lodash');

const messageHelper = require('../helpers/message.helper');

//service
const phoneService = require('../services/phone.service');

const MODULE_NAME = '[Phone Controller]';
const PHONES_NOT_FOUND = 'Phones not found';


module.exports = {
  getAllPhones,
  MODULE_NAME
}


/**
 * Get all Phones
 * @param {Object} req 
 * @param {Object} res 
 */
function getAllPhones(req, res) {

  phoneService.getAllPhones().then(result => {
    if (!_.isUndefined(result)) {
      res.json(result);
    } else {
      res.status(404).json(messageHelper.buildMessage(PHONES_NOT_FOUND))
    }
  }).catch(error => {
    logger.error(error);
    res.status(409).json(messageHelper.buildMessage(error.message ? error.message : error));
  });
}