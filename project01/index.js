const express = require("express");
// const users = require("./MOCK_DATA.json");

const app = express();
const {connect}= require('./connection')
 const userRouter =require('./routes/user')
 const {logReqRes}= require('./middlewares')

connect()
 //MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'))


app.use("/",userRouter);
app.listen(8000, () => console.log("server started at ",8000));
