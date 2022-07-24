const express = require ('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()

const Data = require('../models/job')

router.get('/get_data', async (req,res) => {
    try{
      const jr1 = await Data.find()
      res.json(jr1)
    } catch(err){
        res.send('Error' + err)
    }
})
router.get('/get_data/:id', async (req,res) => {
    try{
        const jr1 = await Data.findById(req.params.id)
        res.json(jr1)
    } catch(err){
        res.send('Error' + err)
    }
})

router.post('/post_data', async (req,res) => {
    const data = new Data({
        job_id: req.body.job_id,
        job_name: req.body.job_name,
        job_description: req.body.job_description,
        experience: req.body.experience,
        salary: req.body.salary
})
    try{
        const jr1 = await data.save()
        res.json(jr1)
    } catch(err){
        res.send('Error' + err)
    }
})

router.patch('/update_data/:id', async (req,res) => {
    try{
        const data = await Data.findById(req.params.id)
        data.job_id = req.body.job_id,
        data.job_name = req.body.job_name,
        data.job_description = req.body.job_description,
        data.experience = req.body.experience,
        data.salary = req.body.salary
        const jr1 = await data.save()
        res.json(jr1)
    } catch(err){
        res.send('Error' + err)
    }
})

router.delete('/delete_data/:id', async (req,res) => {
    try{
        const data = await Data.findById(req.params.id)
        const jr1 = await data.delete()
        res.json(jr1)
    } catch(err){
        res.send('Error' + err)
    }
})

router.post('/assignJob',async(req,res)=>{
    try{
        let obj ={
            user_id:mongoose.Types.ObjectId(req.body.userId)
        }
        const data = await Data.findOneAndUpdate(
            { _id: req.body.id }, 
        { $push: { userId: obj  } })
        res.send("assign done")
    }catch(err){
        res.send('error',+ err)
    }
})
module.exports = router





