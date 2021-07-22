const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("server run");
});

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    var n1 =Number( req.body.num1);
    var n2 =Number( req.body.num2);
    var result = n1+n2;
    res.send("Result = "+result);
});

app.get("/bmi_calculator",function(req,res){
    res.sendFile(__dirname+"/bmi_calculator.html");
});

app.post("/bmi_calculator",function(req,res){
    var h = parseFloat(req.body.num1);
    var w = parseFloat(req.body.num2);
    var bmi = w/(h*h);
    res.send("Your bmi is: "+bmi);
});


// app.listen(3000,function(){
//   console.log("server is running on port 3000.");
// });
