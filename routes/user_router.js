
const express = require('express')
const router = express.Router()

const Data = require('../models/user')

router.get('/get_data', async (req,res) => {
    try{
      const data1 = await Data.find()
      res.json(data1)
    } catch(err){
        res.send('Error' + err)
    }
})
router.get('/get_data/:id', async (req,res) => {
    try{
        const data1 = await Data.findById(req.params.id)
        res.json(data1)
    } catch(err){
        res.send('Error' + err)
    }
})

router.post('/post_data', async (req,res) => {
    const data = new Data({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
        address: req.body.address,
        mobile: req.body.mobile,
        email: req.body.email,
        pincode: req.body.pincode,
        job: req.body.job
})
    try{
        const data1 = await data.save()
        res.json(data1)
    } catch(err){
        res.send('Error' + err)
    }
})

router.patch('/update_data/:id', async (req,res) => {
    try{
        const data = await Data.findById(req.params.id)
        data.first_name = req.body.first_name
        data.last_name = req.body.last_name
        data.dob = req.body.dob
        data.address = req.body.address
        data.mobile = req.body.mobile
        data.email = req.body.email
        data.pincode = req.body.pincode
        data.job = req.body.job
        const data1 = await data.save()
        res.json(data1)
    } catch(err){
        res.send('Error' + err)
    }
})

router.delete('/delete_data/:id', async (req,res) => {
    try{
        const data = await Data.findById(req.params.id)
        const data1 = await data.delete()
        res.json(data1)
    } catch(err){
        res.send('Error' + err)
    }
})

module.exports = router