// const fileWriteFun=require('./notesModule');
const request=require('request');
const fs=require('fs');
const express=require('express');
const yargs=require('yargs');
const app=express();
const array=new Array();

app.use(express.json());


request('https://ghibliapi.herokuapp.com/films');

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if (error) {
        console.error(`Could not send request to API: ${error.message}`);
        return;
    }

    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but received ${response.statusCode}.`);
        return;
    }

    console.log('Processing our list of movies');
    movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`${movie['title']}, ${movie['release_date']}`);
        array.push({'movie':`${movie['title']}`,'year':`${movie['release_date']}`}, );
        // fs.writeFile('notesData.txt',array.toString(),(err)=>{

        // });
    });
});



app.get('/getMovies',(req,res)=>{
    if(res.statusCode==200){
        res.json({ 
            staus: 'true',
        data:array })
    }
});

app.listen(5000,()=>{
    console.log('Listening ....')
});