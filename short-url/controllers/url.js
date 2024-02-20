const shortid = require("shortid");
const URL = require("../models/url");
const User = require('../models/user')

async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const newshortId = shortid();
  await URL.create({
    shortId: newshortId,
    redirectedUrl: body.url,
    visitHistory: [],
  });
  return res.render('home',{ id: newshortId })
  
}

async function handleRedirect(req, res) {
  const shortID = req.params.shortid;
  const entry= await URL.findOneAndUpdate(
    { shortId: shortID },
    {
      $push: {
        visitHistory: {
            timeStamp: Date.now()
        },
      },
    }
  );
  res.redirect(entry.redirectedUrl);
}
async function handleDeleteAll(req, res){
    await URL.deleteMany();
    return res.send({"msg": "all entries deleted"})
}
module.exports = { generateNewShortURL, handleRedirect, handleDeleteAll };
