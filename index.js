var express = require("express"); 
var scrapper = require("./scrapper");
const URL = "https://www.liveworksheets.com/worksheets/en/English_as_a_Second_Language_(ESL)/Reported_speech/Reported_speech_iu80411hj";
var app = express(); 
var path = require("path"); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.get('/', async function(req,res){
  const page = await scrapper.getPage()
  res.send(page.html); 
}); 
app.listen(3000); 
console.log("Server running at Port 3000"); 