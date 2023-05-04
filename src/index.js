const express= require("express");
const mongoose= require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 9000;

//routes

app.get('/', (req, res)=>{
    res.send("Welcome to my API")
}); 

//mongodb connection
 mongoose
 .connect(process.env.MONGODB)
 .then(()=>console.log("Connect to MongoDB Atlas"))
 .catch((error)=>console.error(error));


app.listen(port, ()=>console.log('server listning on port', port));