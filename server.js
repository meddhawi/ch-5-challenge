const express = require('express')
const app = express()
const port = 3000;

// Setting template engine EJS
app.set('view engine', 'ejs')


app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use(express.json()); 


app.get('/', function(req, res){
    res.render('user')
})

app.get('/game', function(req, res){
    res.render('game')
})

app.listen(port, () => {
    console.log(`Go to http://localhost:${port}`)
})