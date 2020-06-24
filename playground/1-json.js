const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const parsedData = JSON.parse(dataJSON);

parsedData.name="Aditi"
parsedData.age="23"

const userJSON = JSON.stringify(parsedData);
fs.writeFileSync('1-json.json',userJSON)