const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"))

// Global Variable
let userInputs = [];
let workInputs = [];


app.get('/', function(req, res) {
    let day = date.getDate();
    res.render('list', {listTitle: day ,newListItems: userInputs});
})

app.post('/', function(req, res) {
    var item = req.body.newItem;
    if(req.body.pageName === 'Work'){
        workInputs.push(item);
        res.redirect("/Work")
    }else{
        userInputs.push(item);
        res.redirect('/');
    }
})

app.get('/Work', function(req, res) {
    res.render('list', {listTitle:"Work" ,newListItems: workInputs});
})


app.get("/about", function(req, res) {
    res.render('about')
})

app.listen(3000,function(){
    console.log("Started")
});