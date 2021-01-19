const express= require('express');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var {bukModel}= require('./model/books');


var apps= express();


apps.use(bodyParser.json());
apps.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://shaji:ponnu123@cluster1.u2cuq.mongodb.net/bookappdb?retryWrites=true&w=majority",{ useNewUrlParser: true},{ useUnifiedTopology: true })

apps.post('/read',async(request,response)=>{
   try
   {
       var data= request.body;
       var bookData = new bukModel(data);
       var result= await bookData.save();
       response.json(result);


   }
   catch(error)
   {

   }


})



apps.listen(process.env.PORT|| 3000,function(){
    console.log("Node js Server is running at http://localhost:3000");
})
