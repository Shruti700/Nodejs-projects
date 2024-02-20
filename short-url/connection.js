const mongoose = require("mongoose");

async function connect(url) {
    //MONGODB CONNECTION
return mongoose.connect(url).then(()=>console.log("DB connected")).catch((err)=>console.log(err))
}
module.exports={
    connect
}