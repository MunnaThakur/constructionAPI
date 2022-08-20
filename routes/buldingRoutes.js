const express = require("express");
const router = express.Router();
// const multer = require("multer");
const constructionModel = require("../model/constructionModel.js");




//Creating 
router.post("/", async (req,res)=>{
    try{
        const createBulding = await constructionModel.create(req.body);
        res.json(createBulding);
    }catch(error){
        res.json(error);
    }
});


//Get Single data
router.get("/:buldingId", async(req,res)=>{
    const buldingId = res.params.buldingId;
    try{
        const singleData = constructionModel.findById(buldingId);
        res.json(singleData);
    }catch(error){
        res.json(error);
    }
});

//Delete
router.delete("/:buldingId", async(req,res)=>{
    try{
        await constructionModel.remove({"_id": req.params.buldingId})
        res.status(200).status.json({
            message:"done"
        })
    }catch(error){
        res.json(error);
    }
})


//Update
router.put("/:buldingId", async(req,res)=>{
    const buldingId = req.params.buldingId;
    try{
        const updateData = await constructionModel.updateOne({
            _id:buldingId,
        },
        res.body);
        res.json(updateData);
    }catch(error){
        res.json(error);
    }
});

module.exports = router;

