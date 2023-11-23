const API = 'https://api.themoviedb.org/3';

export const get = (path) => {

    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGQ3YjQ1ZDRiM2JlMmY2NTllNzg0NzIyMDJkZWUzNSIsInN1YiI6IjY1MGI3OTU1M2Q3NDU0MDExYjc1NjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XjCA6nPrtGrYMi4iIPO9YFH6-JkIZ-3r9onykzfqGPU",
            "Content-Type": "application/json;charset=uft-8"
        }
    })
    .then((result) => result.json())
    

}