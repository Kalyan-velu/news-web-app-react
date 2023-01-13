const express=require('express')
const {TopHeadLines} = require('../controllers/Categories')

const router=express.Router()

router.get('/top-headlines',TopHeadLines)

module.exports=router