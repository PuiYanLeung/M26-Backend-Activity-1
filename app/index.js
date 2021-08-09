const fs = require('fs');
const command = process.argv[2];
const input = process.argv[3];
const value = process.argv[4];
const { add, list, update, deleteMovie } = require('./utils');

const app = () =>{
    let movieListArr
    try{
        movieListArr = JSON.parse(fs.readFileSync('./netflix.json'));
    }catch(error){
        movieListArr = [];
    }    
    
    if(command === 'add'){
        // add input (movie) to JSON file
        add(movieListArr, input);
    }else if (command === 'list'){
        // list all (movies) from JSON file
        list();
    }else if (command === 'update'){
        // update movies in JSON file
        update(movieListArr, input, value);

    }else if (command === 'delete'){
        // delete movies in JSON file
        deleteMovie(movieListArr, input);
    }
}

app();