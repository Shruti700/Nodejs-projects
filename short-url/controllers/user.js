const User= require('../models/user')
const URL = require("../models/url");
const {v4: uuidv4}= require('uuid');
const {setUser} =require('../service/auth')

async function handleSignup(req, res) {
    const {name,email,password} = req.body;
    let emailPattern = new RegExp("(?=.*@)(?=.+.com)");
    if( name.length<4 || !emailPattern.test(email)){
        res.status(400).json({msg: "Either name is too short or email is not correct"})
    }
    await User.create({
         name,
         email,
         password
    });
    return res.redirect("/login")
}
async function handleLogin(req,res) {
    const {email,password}= req.body;
    const allURL= await URL.find({})
    const theuser= await User.findOne({email: email})
    if(!theuser){
        return res.render('login',{error: "User not found"})
    }
    if(password != theuser.password){
        return res.render('login',{error: "Wrong password"})
    }
    const sessionId= uuidv4();
    setUser(sessionId, theuser);
    res.cookie('uid', sessionId);
    return res.render('home',{
        user: theuser,
        urls: allURL
    })
}

module.exports={ handleSignup, handleLogin}