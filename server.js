var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));                            //only proper format is read else rejected

var ingredients = [
  {
    "id":"223k",
    "text":"Eggs"
  },
  {
    "id":"54s3",
    "text":"Milk"
  },
  {
    "id":"53w3",
    "text":"Bacon"
  },
  {
    "id":"34aw",
    "text":"Froggs legs"
  }
];

app.get('/', function(req,res){
  res.send(ingredients);
});

app.get('/fun', function(req,res){
  res.send('So much fun');
});

app.post('/', function(req,res){
  var ingredient = req.body;
  if(!ingredient || ingredient.text===""){
    res.status(500).send({error:"Your ingredient must have text property"});
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredient);
  }
});

app.listen(3000, function(){
  console.log('first api running on port 3000');
});
