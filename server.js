'use strict'

const express = require('express');
const app = express();

app.get('/', handleHome)
app.get('/about', handleAbout)




function handleHome(req,res){
    res.status(200).send('Hello my friend, you are at home page')
}
function handleAbout(req,res){
    res.status(200).send('this is a testing server webpage using AWS.')
}


app.listen(8080, () => {
    console.log('up and running on port 8080')
})