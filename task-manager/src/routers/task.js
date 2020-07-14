const express = require('express')
const router = new express.Router()
const newTask = require('../models/newTask')


router.patch('/task',async (req,res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdates = ["description","completed"]
    const isValidUpdates = updates.every((update => allowedUpdates.includes(update)))

    if(!isValidUpdates){
        return res.status(400).send({error:"Invalid updates!"})
    }
    const task = new newTask(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.post("/task/:id",async (req,res)=>{
    try{
        const task = await task.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        if(!task){
            return res.status(400).send()
        }

        res.send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.delete("/task/:id",async(req,res)=>{
    try{
        const task = await task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(400).send()
        }
        return res.status(200).send()
    }
    catch(e){
        res.send(400).send(e)
    }
})

module.exports = task