const express = require('express')
const mongoose = require('mongoose')
const shopRouter = require('./routers/shopRouter')
const path = require('path')
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 5000

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use("/static", express.static(path.resolve('static')))
app.use("/", shopRouter)

const start = async () => {
    try{
        await mongoose.connect('mongodb+srv://shharw:qwertyui123@cluster0.jiyhlp9.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT)
    }catch (e){
        console.log(e)
    }
}

start()