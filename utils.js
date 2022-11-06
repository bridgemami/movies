let getMoviesByName = async (name, year) => {
    try {
    let apiMovie = await fetch(`http://www.omdbapi.com/?apikey=ed956c7d&t=${name}&y=${year}`)
    let response= await apiMovie.json()
    console.log(response)
    let imdbId= response.imdbID;
    console.log(imdbId)
    
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
            console.log(apiId)
            let response = await apiId.json()
            console.log(response)
        }
        catch (err) {
            console.error(`The error is ${err}`)
        }
    }
    
    // getMovieDetailsById('0030850')
    
    export {getMoviesByName, getMovieDetailsById}; 
  