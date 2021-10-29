const express = require('express')
const app = express()
const port = 3030;
const users = require('./data/user.json')
const userreg = require('./tools')
const fs = require('fs');


// Setting template engine EJS
app.set('view engine', 'ejs')

//set support body 
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

//important to link css and other static file that in public folder
app.use(express.static('public'));



//INDEX OR START
app.get('/', function(req, res){
    res.render('user')
})

//GAMEPLAY
app.get('/game', function(req, res){
    res.render('game')
})


//LOGIN PAGE will redirect /game/:username
app.get('/login', function(req, res){
    res.render('login')
})

app.post('/login', function(req, res){
    const {email, password} = req.body
    for(userinput of users){
        if(userinput.email === email && userinput.password === password) {
            return res.redirect('/game');
          }
    }
})

//REGISTER PAGE
app.get('/register', function(req, res){
    res.render('register')
})

app.post('/register', function(req, res){
    const {email, password, username} = req.body
    userreg.addUser({email, password, username})
    res.redirect('/login')
})

app.listen(port, () => {
    console.log(`Go to http://localhost:${port}`)
})

