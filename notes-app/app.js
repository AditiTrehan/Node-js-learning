const fs=require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

//Customise yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command:'add',
    describe:'Add new note!',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler:(argv) => {
        notes.addNote(argv.title,argv.body); //utilize addNote function created in notes.js
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note!',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:(argv)=>{
        notes.removeNote(argv.title) 
    }
})

//Create list command
yargs.command({
    command:"list",
    describe:"List a note!",
    handler:()=>{
        notes.listNotes();
    }
})

//Create read command
yargs.command({
    command:"read",
    describe:"Read a note!",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.readingNote(argv.title);
    }
})


yargs.parse()

// console.log(chalk.green.bold.rgb(15, 100, 204).inverse("Success!"))

// fs.writeFileSync('notes.txt','This file is created by node.js')
// fs.appendFileSync('notes.txt',"Trying Challenge")

// const command = process.argv[2];

// console.log(process.argv)

// if(command === "add"){
//     console.log("Adding note!")
// }
// else if(command === "remove"){
//     console.log("Removing note!")
// }