import "../models/connection.js";
import url from 'url';

import CategorySchemaModel from "../models/category.model.js";

export const save=async(req,res)=>{
 const category=await CategorySchemaModel.find();
 const l=category.length;
 const _id=l==0?1:category[l-1]._id+1;
 const cDetails={...req.body,'_id':_id};
 try{
    await CategorySchemaModel.create(cDetails);
    res.status(201).json({"status":true});
 }
 catch(error){
    res.status(500).json({"status":false});
 }
};

export const fetch=async(req,res)=>{
   var condition_obj=url.parse(req.url,true).query.condition_obj;
   if(condition_obj!=undefined)
    condition_obj=JSON.parse(condition_obj); 
   else
    condition_obj={};  
   var cList=await CategorySchemaModel.find(condition_obj);
   if(cList.length!=0)
     res.status(200).json(cList);
   else
     res.status(404).json({"status":"Resource not found"}); 
  };

 export var deleteCategory=async(req,res)=>{
   var obj=req.body;
   if(obj!=undefined)
   {
    var condition_obj=JSON.parse(req.body.condition_obj); 
    let cDetails = await CategorySchemaModel.findOne(condition_obj);
    if(cDetails){
       let category=await CategorySchemaModel.deleteOne(condition_obj);   
       if(category)
         res.status(200).json({"status":"OK"});
       else
         res.status(500).json({"status": "Server Error"});
      }
    else
     res.status(404).json({"status":"Requested resource not available"});
   } 
   else
    res.status(500).json({"status": "Please enter valid condition"});
   };


 export var update=async(req,res)=>{
      var obj=req.body;
      if(obj!=undefined)
      {
         let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
         if(cDetails){
             let category=await CategorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
             if(category)
               res.status(200).json({"msg":"OK"});
             else
               res.status(500).json({"status": "Server Error"});
         }
         else
           res.status(404).json({"status":"Requested resource not available"});   
      }
      else
      res.status(500).json({"status": "Please enter valid condition"});      
   };
   
