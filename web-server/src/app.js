const express = require('express');
const path = require('path')
const app = express();

const publicDirectoryPath = path.join(__dirname,'../public');
const helpDirectoryPath = path.join(__dirname,'../public/help.html')
const viewsPath = path.join(__dirname,'../templates')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Andrew Mead'
    })
})

// app.get('/help',(req,res)=>{
//     res.send(express.static(helpDirectoryPath))
// })

// app.get('',(req,res)=>{
//     res.send('<h1>Hello express!</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send({name:"Abc",conatct:'+11 000 000 000'})
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About Page</h1>')
// })

app.get('/weather',(req,res)=>{
    res.send([{location:'Boston',forecast:'23'},{location:'New York',forecast:'29'}])
})

app.listen(3000,()=>{
    console.log("Server is up on port 3000")
})

app.get('/help/*',(req,res)=>{
    res.send('Help article not found')
})

app.get('*',(req,res)=>{
    res.send("My 404 page")
})