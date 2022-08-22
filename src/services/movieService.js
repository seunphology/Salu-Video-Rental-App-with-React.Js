import http from './httpService';
import config from '../config.json';


const apiEndpoint = config.apiUrl + "/movies";

function movieUrl(id) {
    return `${apiEndpoint}/${id}`; // To replace apiEndpoint + "/"  in the return of getmovie and saveMovie functions. Note that this function is only used here and not exported.
}
export function getMovies() {


    return http.get(apiEndpoint);

}

export function getMovie(movieId) {
    

    return http.get(movieUrl(movieId));

}

export function saveMovie(movie) {

    if (movie.id) {
        const body = {...movie};
        delete body._id;
    return    http.put(movieUrl(movie._id),body);
    }
    

    return http.post(apiEndpoint,movie);

}

export function deleteMovie(movieId){

    return http.delete(movieUrl(movieId) );


}