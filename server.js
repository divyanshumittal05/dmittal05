const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencode({extended: true}));

app.get("/", function(req, res){
  resp.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1/(n2*n2);
  res.send("The answer is " + result);
});

app.listen(3000, function() {
  console.log("server has started on port 3000");
});
