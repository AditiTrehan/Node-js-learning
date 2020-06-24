const fs=require('fs')
const chalk = require('chalk')

//adding a note
const addNote = (title,body) =>{
    const notes = loadNotes(); //loading notes from notes.json
    const duplicateNote = notes.find((note) => note.title === title) //filtering notes with dupe titles

    debugger
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        }) //Adding new note 

        saveNotes(notes) //Saving notes
        console.log("New note added")
    }
    else{
        console.log("Title is taken")
    }
   
}

//removing a note
const removeNote = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter((note) => note.title !== title)
    if(updatedNotes.length === notes.length){
        console.log(chalk.bgRed("No note found!"))
        saveNotes(updatedNotes)
    }
    else{
        console.log(chalk.bgGreen("Note removed!"))
    }
    
}

//listing notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green("Your Notes"))
    notes.forEach((note) => console.log(chalk.blue(note.title)))
    
}

//reading a note
const readingNote = (title) => {
    const notes = loadNotes();
    const resNote = notes.find((note)=> {
        if(note.title == title){
            return note
        }
    })
    if(resNote){
        console.log(chalk.green(`Title ${resNote.title}`))
        console.log(chalk.yellow(`Description ${resNote.body}`))
    }
    else{
        console.log(chalk.red('No match found!'))
    }
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON) //creating a new file to save data
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json'); //reading buffer
        const dataJSON = dataBuffer.toString() //converting to string
        return JSON.parse(dataJSON) //parsing data to display
    }
    catch(e){
        return [] //return empty array for error case
    }
    
}

module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readingNote:readingNote
}