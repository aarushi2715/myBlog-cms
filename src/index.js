const express = require("express");//importing 
const app = express();
//where am i gonna define all my routes
//inside an express application so basically i am using express through app
//creating server
app.get("/", (req, res)=>{
    //when app has a get request what will it do
    // slash=homepage
    //a url can come instead of the slash as well
    res.json({
        message:"My first get request"
    });//message we want the client to receive
    
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});//open listening
