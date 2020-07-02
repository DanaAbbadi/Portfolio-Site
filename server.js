'use strict'

const express = require('express'); // initilize the server
const { request, response } = require('express');

const server = express(); // to be able to use all express functionalities 

// create a PORT number 
const PORT = process.env.PORT || 5000;

// to make the server use/link/connect to the front-end files that are in the public folder 

server.use(express.static('./public'));

//Now your server is ready but add server.listen at the end of the code
// the following commands are just examples

// to create like a page in the server called test for example:

server.get('/test', (request,response) =>{
    // console.log('My first server');
    response.send('My first server');
    
})

server.get('/data',(request,response)=>{
    let ASAC = [
        {course: '102'},
        {course: '201'},
        {course: '301'},
        {course: '401'}
    ]
    response.json(ASAC);
})



// to make the server listen to your port 
server.listen(PORT,()=>{
    console.log('Listening on port',PORT);
});