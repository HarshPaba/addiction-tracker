// const express= require('express');
// const bodyParser = require('body-parser');
// const ejs= require('ejs');
// const app= express();

// mongoose.connect("mongodb://localhost:27017/userDB",{ useNewUrlParser:true });

// const userSchema = new mongoose.Schema({
//     email: String,
//     password: String
// });


// const mongoose=require('mongoose')
// mongoose.connect("mongodb://localhost:27017/addictionDB",{useNewUrlParser:true})
// const bcrypt= require("bcrypt");
// saltRounds=10;
// //patient
// const patientSchema=new mongoose.Schema({
//     username:String,
//     password:String
// });

// const Patient=new mongoose.model('Patient',patientSchema)

// // const patient=new Patient({
// //     username:"_harsh",
// //     password:"password"
// // });
// // patient.save();

// const therapistSchema=new mongoose.Schema({
//     username:String,
//     password:String
// });
// const Therapist=new mongoose.model('Therapist',therapistSchema)

// // const therapist=new Therapist({
// //     username:"_harsh",
// //     password:"password"
// // });
// // therapist.save();
// const express= require('express');
// const ejs= require('ejs');
// const bodyParser = require('body-parser');
// const session= require("express-session");
// const passportlocalmongoose= require('passport-local-mongoose');
// // var GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate= require("mongoose-findorcreate");


// app.use(express.static("public"));
// app.set('view engine','ejs');
// app.use(bodyParser.urlencoded({
//     extended:"true"
// }));

// app.get('/',function(req,res){
//     res.render("home");
// });

// app.get('/login_patient',function(req,res){
//     res.render("login_patient");
// });
// app.get('/register_patient',function(req,res){
//     res.render("register_patient");
// });

// app.get('/login_therapist',function(req,res){
//     res.render("login_therapist");
// });

// app.post('/register_patient',function(req,res){

//     bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//         const patient=new Patient({
//             username:req.body.username,
//             password:hash
//         });
//         patient.save(function(err){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.render("secrets");
//             }
//         });
//     });
// });
// app.post('/register_therapist',function(req,res){

//     bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//         const therapist=new Therapist({
//             username:req.body.username,
//             password:hash
//         });
//         therapist.save(function(err){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.render("secrets");
//             }
//         });
//     });

   
// });

// app.post("/login",function(req,res){
//     const username= req.body.username;
//     const password= req.body.password;
//     User.findOne({email:username},function(err,founduser){
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//             if(founduser)
//             {
//                 bcrypt.compare(password,founduser.password, function(err, result) {
//                     if(result===true)
//                     {
//                         res.render("secrets");
//                     }
//                 });
//             }
//         }
//     });
// });

// //  app.post('/register',function(req,res){

// //     bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
// //         const newuser= new User({
// //             email: req.body.username,
// //             password:hash
// //         });
// //         newuser.save(function(err){
// //             if(err){
// //                 console.log(err);
// //             }
// //             else{
// //                 res.render("secrets");
// //             }
// //         });
// //     });

   
// // });

// // app.post("/login",function(req,res){
// //     const username= req.body.username;
// //     const password= req.body.password;
// //     User.findOne({email:username},function(err,founduser){
// //         if(err)
// //         {
// //             console.log(err);
// //         }
// //         else{
// //             if(founduser)
// //             {
// //                 bcrypt.compare(password,founduser.password, function(err, result) {
// //                     if(result===true)
// //                     {
// //                         res.render("secrets");
// //                     }
// //                 });
// //             }
// //         }
// //     });
// // });




// app.use(express.static("public"));
// app.set('view engine','ejs');
// app.use(bodyParser.urlencoded({
//     extended:"true"
// }));

// app.get('/',function(req,res){
//     res.render("index");
// });

// app.get('/login_therapist',function(req,res){
//     res.render("login_therapist");
// });
// app.get('/login_patient',function(req,res){
//     res.render("login_patient");
// });

// app.listen(3000,function(){
//     console.log("server started at port 3000");
// });

const mongoose=require('mongoose')
require('mongoose-type-email');
mongoose.connect("mongodb://localhost:27017/addictionDB",{useNewUrlParser:true})
const bcrypt= require("bcrypt");
saltRounds=10;
//patient
const patientSchema=new mongoose.Schema({
    name:String,
    email:mongoose.SchemaTypes.Email,
    password:String
});

const Patient=new mongoose.model('Patient',patientSchema)

// const patient=new Patient({
//     username:"_harsh",
//     password:"password"
// });
// patient.save();

const therapistSchema=new mongoose.Schema({
    name:String,
    email:mongoose.SchemaTypes.Email,
    password:String
});
const Therapist=new mongoose.model('Therapist',therapistSchema)

// const therapist=new Therapist({
//     username:"_harsh",
//     password:"password"
// });
// therapist.save();

require('dotenv').config();
const express= require('express');
const ejs= require('ejs');
const bodyParser = require('body-parser');
const session= require("express-session");
const passport= require('passport');
const passportlocalmongoose= require('passport-local-mongoose');
const app= express();
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate= require("mongoose-findorcreate");


app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended:"true"
}));

app.get('/',function(req,res){
    res.render("index");
});

app.get('/lrp',function(req,res){
    res.render("lrp");
});
app.get('/lrt',function(req,res){
    res.render("lrt");
});

app.post('/register_patient',function(req,res){

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const patient=new Patient({
            name:req.body.name,
            email:req.body.email,
            password:hash
        });
        patient.save(function(err){
            if(err){
                console.log(err);
            }
<<<<<<< HEAD
            // else{
            //     res.render("secrets");
            // }
=======
            else{
                res.render("patient_dashboard");
            }
>>>>>>> 1330fbd445592649d1cfb4f2dc6d7eb8312a6cff
        });
    });

});
app.post('/register_therapist',function(req,res){

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const therapist=new Therapist({
            name:req.body.name,
            email:req.body.email,
            password:hash
        });
        therapist.save(function(err){
            if(err){
                console.log(err);
            }
            else{
                res.render("therapist_dashboard");
            }
        });
    });

   
});

app.post("/login_patient",function(req,res){
    const email= req.body.email;
    const password= req.body.password;
    Patient.findOne({email:email},function(err,founduser){
        if(err)
        {
            console.log(err);
        }
        else{
            if(founduser)
            {
                bcrypt.compare(password,founduser.password, function(err, result) {
                    if(result===true)
                    {
                        res.render("patient_dashboard");
                    }
                });
            }
        }
    });
});
app.post("/login_therapist",function(req,res){
    const email= req.body.email;
    const password= req.body.password;
    Therapist.findOne({email:email},function(err,founduser){
        if(err)
        {
            console.log(err);
        }
        else{
            if(founduser)
            {
                bcrypt.compare(password,founduser.password, function(err, result) {
                    if(result===true)
                    {
                        res.render("therapist_dashboard");
                    }
                });
            }
        }
    });
});

app.listen(3000,function(){
    console.log("server started at port 3000");
});


