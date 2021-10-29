const express = require('express')
const app = express()
const port = 3030;
const userreg = require('./data/user.json')

// Setting template engine EJS
app.set('view engine', 'ejs')


app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

//important to link css and other static file that in public folder
app.use(express.static('public'));



//Start page or Index page
app.get('/', function(req, res){
    res.render('user')
})

//The gameplay itself
app.get('/game', function(req, res){
    res.render('game')
})

//LOGIN PAGE will redirect /game/:username

app.listen(port, () => {
    console.log(`Go to http://localhost:${port}`)
})

