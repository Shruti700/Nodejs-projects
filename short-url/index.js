const express= require("express")
const app= express();
const PORT= 8000;

const {connect} = require('./connection');
const path = require("path");
const ejs= require('ejs')
const urlRoute= require('./routes/url');
const userRoute= require('./routes/user');
const staticRouter = require("./routes/staticRouter")
connect('mongodb://127.0.0.1:27017/shortURL')

// => Here we expose the views so it can be rendered.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// => Here we expose your dist folder
app.use(express.static(path.join(__dirname, 'dist')))




app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use("/url", urlRoute);
app.use("/user", userRoute);
app.use('/', staticRouter)
app.listen(PORT,()=>console.log("Server started at " ,PORT))