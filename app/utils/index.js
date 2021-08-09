const fs = require('fs');

const save = (movieListArr) =>{
    let stringyObj = JSON.stringify(movieListArr);
    fs.writeFileSync('./netflix.json', stringyObj);    
}

exports.add = (movieListArr, input) => {
    let movieObj = {movie: input};
    movieListArr.push(movieObj);
    save(movieListArr)
}

exports.list = () => {
    let data = fs.readFileSync('./netflix.json', {encoding:'utf8', flag:'r'});
    console.log(data);
}

exports.update = (movieListArr, input, value) => {
    let newArr = movieListArr.map(movie => (movie.movie) === input ? {movie: value} : movie)
    save(newArr);
}


exports.deleteMovie = (movieListArr, input) => {
    let newArr = movieListArr.filter((movie) => (movie.movie) !== input);
    save(newArr);
}


