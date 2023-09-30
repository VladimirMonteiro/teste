const express = require('express')

const app  = express()

const port = process.env.PORT || 9001

app.get('/', (req,res)=> {
    res.json({
        message: 'Hello world'
    })
})


app.listen(port, ()=> {
    console.log('running')
})