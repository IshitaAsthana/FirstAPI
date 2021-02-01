var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());                                                     // json formatted
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

app.get('/ingredients', function(req,res){
  res.send(ingredients);
});

app.get('/fun', function(req,res){
  res.send('So much fun');
});

app.post('/ingredients', function(req,res){
  var ingredient = req.body;
  if(!ingredient || ingredient.text===""){
    res.status(500).send({error:"Your ingredient must have text property"});
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredient);
  }
});

app.put('/ingredients/:ingredientID',function(req,res){

  var newText = req.body.text;

  if(!text || text === "") {
    res.status(500).send({error: "You must provide ingredient text"});
  } else {
    for(var x = 0; x < ingredients.length; x++) {
      var ing = ingredient[x];
      if(ing.id === req.params.ingredientID) {
        ingredient[x].text = newText;
        break;
      }
    }
    res.send(ingredients);
  }
});

app.listen(3000, function(){
  console.log('first api running on port 3000');
});
