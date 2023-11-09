const mongoose=require("mongoose");

//model description or what object content
const todoSchema =new mongoose.Schema(
   {
       title:{
           type:String,
           required:true,
           maxLength:50,
       },
       description:{
           type:String,
           required:true,
           maxLength:50,
       },
       createdAt:{
           type:Date,
           require:true,
           default:Date.now(),

       },
       createdAt:{
           type:Date,
           require:true,
           default:Date.now(),

       }
  }
);

module.exports= mongoose.model("Todo",todoSchema);