const express = require("express")
const cors=require('cors')
const { default: helmet } = require("helmet")
require('dotenv/config')
const app=express()

app.use(cors())
app.use(helmet())
const NewsRoutes=require('./routes/NewsRoutes')
app.use('/api',NewsRoutes)
const PORT=process.env.PORT || 8000
app.listen(PORT,()=>{
	console.log(`Server is running on ${PORT}`)
})
