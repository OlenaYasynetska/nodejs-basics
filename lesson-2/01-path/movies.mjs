import * as fs from 'node:fs/promises';

async function readMovies() {
    const data = await fs.readFile('movies.txt', { encoding: 'UTF-8'});

    return data;
}

export{readMovies};