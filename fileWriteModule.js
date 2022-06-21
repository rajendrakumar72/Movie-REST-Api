const fs=require('fs');

fs.appendFileSync("notesData.txt"," This Going To create txt file ");

fs.readFile('./notesData.txt','utf-8',(err,data)=>{
    if(err) return console.log(err);
    console.log(data);
});

module.exports=fs;