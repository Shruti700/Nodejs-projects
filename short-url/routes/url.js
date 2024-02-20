const express = require("express");
const {generateNewShortURL, handleRedirect,handleDeleteAll} =require('../controllers/url')
const Router= express.Router();

Router.post('/', generateNewShortURL)
Router.get('/:shortid',handleRedirect)
Router.delete('/', handleDeleteAll)
module.exports= Router;