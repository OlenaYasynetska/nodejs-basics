import { readMovies } from "./movies.mjs";// команда pwd в терминале показывает абсолютный путь

readMovies()
    .then(console.log)
    .catch(console.error);

// path.resolv - если написан слеш, то путь обнуляется, 
// path.join -пишется весь путь