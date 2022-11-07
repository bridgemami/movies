let getMoviesByName = async (name, year) => {
    try {
    let apiMovie = await fetch(`http://www.omdbapi.com/?apikey=ed956c7d&t=${name}&y=${year}`)
    let response= await apiMovie.json()
    console.log(response)
    let poster= response.Poster;
    console.log(poster);
    let cap= response.Type.charAt(0).toUpperCase()
    let second= response.Type.slice(1)
    document.getElementById('posters').src=`${poster}`;
    document.getElementById('posters').alt=`${response.Title} poster`;
  document.getElementById('title').innerHTML= `${response.Title}`;
  document.getElementById('type').innerHTML= `${cap}${second}`;
  document.getElementById('rating').innerHTML= `${response.Ratings[0].Value} from ${response.Ratings[0].Source}`
  document.getElementById('rated').innerHTML= `${response.Rated}`;
  document.getElementById('length').innerHTML= `${response.Runtime}`;
  document.getElementById('genre').innerHTML= `${response.Genre}`;
  document.getElementById('plot').innerHTML= `${response.Plot}`;
  document.getElementById('cast').innerHTML= `${response.Actors}`;

     
    }
    catch (err) {
    console.error(`The error is ${err}`)
    }}
    
    // getMoviesByName("Ant-man")
    // getMoviesByName("Texans")
    // getMoviesByName("Attack of the Clones", 2002)
    
    let getMovieDetailsById = async (imdbId) => {
        try{
            let apiId= await fetch(`http://www.omdbapi.com/?apikey=ed956c7d&i=tt${imdbId}`)
            // console.log(apiId)
            let response = await apiId.json()
            let poster= response.Poster;
            console.log(poster)
            return poster
        }
        catch (err) {
            console.error(`The error is ${err}`)
        }
    }
    
    // getMovieDetailsById('0030850')
    
    export {getMoviesByName, getMovieDetailsById}; 
  