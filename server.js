const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/env.index'); 

//init hero router
const generalRoutes = require('./api/routes/general.routes');

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

const app = express();
let router = express.Router();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use( function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, Accept, x-Requested-with, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
});

//router hero use
app.use('/api', router);

//use hero routes
generalRoutes(router);

 
app.listen(PORT, function(){
    console.log('Running on: http://localhost:'+PORT);
})