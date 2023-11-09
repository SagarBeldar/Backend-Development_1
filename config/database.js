const mongoose =require("mongoose");

require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
     useNewUrlParser:true,
     useUnifiedTopology:true,
    //  useCreateIndex: true
    })
 
    .then(()=>console.log("DB ka connection is succesfully"))
    .catch((error)=>{
     console.log("Issues in db connection");
     console.error(error.massage);
     process.exit(1); 
    });
 }

 module.exports=dbconnect;