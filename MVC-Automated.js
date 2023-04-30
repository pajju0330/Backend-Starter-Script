#!/usr/bin/env node

//imports
const fs = require('fs');
const cwd = process.cwd();


// creating and updating package.json
const childProcess = require('child_process');
const child = childProcess.exec;
const command1 = child('npm init -y',(error)=>{
    if(!error) console.log("created package.json");
    else console.log(error);
});
const command2 = child('npm install express dotenv http-status-codes',(error)=>{
    if(!error) console.log("Downloaded dependencies");
    else console.log(error);
});
const command3 = child('npm install -D nodemon ',(error)=>{
    if(!error) console.log("Downloaded dev-dependencies");
    else console.log(error);
});


//automating folders
fs.mkdir(`${cwd}/model`, (err) => {
    if(err) console.log(`error creating model`);
    else console.log(`model folder created`);
} )
fs.mkdir(`${cwd}/routes`, (err) => {
    if(err) console.log(`error creating routes`);
    else console.log(`routes folder created`);
} )
fs.mkdir(`${cwd}/controllers`, (err) => {
    if(err) console.log(`error creating controllers`);
    else console.log(`controllers folder created`);
} )


//automating prettier settings
const configs = {
    semi:true,
    tabWidth: 2,
    useTabs: false,
    singleQuote: true
}
fs.writeFile(`${cwd}/.prettierrc`, JSON.stringify(configs),(err,data)=>{
    if(err) console.log(err);
    else console.log(`created prettier configuration file`);
});


// creating .gitignore
const ignorableData = `
.env
node_modules
`
fs.writeFile(`${cwd}/.gitignore`, ignorableData,(err,data)=>{
    if(err) console.log(err);
    else console.log(`created .gitIgnore configuration file`);
});


//automating app.js
const appData = `
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req,res) => {
    res.send("Prajwal's starer code for backend developers");
})

app.listen(port, ()=>{
    console.log("server started");
})
`
fs.writeFile(`${cwd}/app.js`, appData,(err,data)=>{
    if(err) console.log(err);
    else console.log(`created app.js`);
});