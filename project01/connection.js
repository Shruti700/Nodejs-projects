const mongoose = require("mongoose");

async function connect() {
    //MONGODB CONNECTION
return mongoose.connect('mongodb://127.0.0.1:27017/userData').then(()=>console.log("DB connected")).catch((err)=>console.log(err))
}
module.exports={
    connect
}