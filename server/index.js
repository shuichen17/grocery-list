//create a server that listens for incoming messages create the routes planned on the whiteboard
//earlier try to integreate a call to the database

// import the express library
const express = require('express') // this is return  a class express is a module 
// somewhere inside node_modules/express 
//class express {}
//module.exports = Express;
//invoke the returned function to create the server object
const app = express();
// declare the port your app will be listening to requests on 
//import our database file
const db = require('../db/controller.js');
const PORT = 3000;

const cors = require('cors');
app.use(cors());

// start the server listening on  localhost:PORT
app.listen(PORT, () => {
    console.log("Server is listening on 16455 port:", PORT)
})
// https://www.amazon.com/   after the slash /
//          |------------|=======|
//          domain name    endpoint 
//serve static files(index.html, style.css, bundle.js, pictures, mp3,...
//you can use as many of these as you like and they will run before your server...)
// const logRoute = function (req, res, next) {
//     console.log('request reveived')
//     next();
// }
// app.use(logRoute)
app.use(express.static('client/dist/'));
//create a post route

var bodyParser = require('body-parser')
app.use(bodyParser.json())
//create a get route
app.delete('/groceries', (req, res) => {
    console.log("16455!!! :", req.body);
     db.deleteGrocery(req, res);
    
})

app.get('/groceries', (req, res) => {
   db.getAll((err, data) => {
       if(err) {
           res.status(500).send(err);
       } else {
           res.status(200).send(data);
       }
   })
//    console.log(req)
    
    //res.send();
})

app.post('/groceries', (req, res) => {
    
    //     SELECT * FROM groceries name = name
    //     UPDATE groceries WHERE id = id
    // })
    db.addGrocery(req.body.name, req.body.quantity, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})
// app.get('/gummybears', (req, res) => {
//     console.log('All the gummy bears you can eat')
//     res.send();
// })

