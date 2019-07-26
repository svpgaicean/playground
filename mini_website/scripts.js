// https://swapi.co/api/films

async function getMovies() {
    const response = await fetch('https://swapi.co/api/films');
    const parsed_resp = await response.json();
    // console.log(parsed_resp);
    
    const moviesObjArr = parsed_resp.results;
    // console.log(moviesObjArr);

    function compare(a, b) {
        const idA = a.episode_id;
        const idB = b.episode_id;
        let comparison = 0;
        if (idA > idB) {
            comparison = 1;
        } else if (idA < idB) {
            comparison = -1;
        }
        return comparison;
    }
    const moviesObjSortedArr = moviesObjArr.sort(compare);
    // console.log(moviesObjSortedArr);
    const moviesTitles = moviesObjSortedArr.map(function(elem) {
        // console.log(elem);
        return elem.title;
    })
    // console.log(moviesTitles);
    return moviesTitles;
}
