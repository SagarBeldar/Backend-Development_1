// const express=require('express');
// const app=express(); 

// app.listen(3000,()=>{
//     console.log("App is running successfully")
// })


// ///Routes is used to map with controller

const express= require("express");
const app=express();

//load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo api
const todoRoutes=require("./routes/todos");

//mount the todo api routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT, ()=>{
  console.log(`Server Start seccessfuly yessssssss at ${PORT}`);
})

//connect to database
const dbConnect=require("./config/database");
dbConnect();

//defalut route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HomePage and i did it </h1>`);
})


