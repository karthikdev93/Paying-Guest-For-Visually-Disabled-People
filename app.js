//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://karthik93:Karthikdev768@cluster0.bka9g.mongodb.net/mydb", {useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"));

app.post("/signupvi",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phno = req.body.phno;
    const password = req.body.password;

    const data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password,

    }

    db.collection('vi').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully In VI-collections");
    });

    return res.redirect('signupsuccessvi.html')

});

app.post("/signupho",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phno = req.body.phno;
    const password = req.body.password;

    const data1 = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password,

    }

    db.collection('ho').insertOne(data1,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully In HO-collections");
    });

    return res.redirect('signupsuccessho.html')

});

app.post("/signup",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phno = req.body.phno;
    const password = req.body.password;

    const data2 = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password,

    }

    db.collection('user').insertOne(data2,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully In users-collections");
    });

    return res.redirect('signupsuccess.html')

});

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('home.html');
});
app.get("/signupvi",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('signupvi.html');
});

app.get("/signup",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('signup.html');
});

app.get("/signupho",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('signupho.html');
});

app.get("/homeuser",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('homeuser.html');
});

app.get("/homevi",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('homevi.html');
});

app.get("/homeho",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('homeho.html');
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
  console.log("Server started successfully");
});