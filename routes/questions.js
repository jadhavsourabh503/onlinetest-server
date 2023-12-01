var express=require('express');
var mongodb=require('mongodb');
var router=express.Router();
router.get('/get-test',async(req,res,next)=>{//req received
   try{
    var mongoClient=mongodb.MongoClient
    var server=await mongoClient.connect("mongodb+srv://sourabhjadhav:ppp3@8am.kxb3dce.mongodb.net/");
    var db=server.db('school');
    var collection=db.collection('questions');
    var result=await collection.aggregate([{$sample: {size:5}}]).toArray();
    res.send(result);
   }catch(e){
    res.send(e);
   }

})

module.exports=router;