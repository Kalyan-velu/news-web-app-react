const express=require('express')
const {TopHeadLines,CountryTop, Category, Search} = require('../controllers/Categories')

const router=express.Router()

router.get('/top-headlines',TopHeadLines)
router.get('/top/:id',CountryTop)
router.get('/categories/:id',Category)
router.get('/search/:id',Search)

module.exports=router