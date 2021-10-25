import React,{useEffect,useState} from "react";


const Movie =()=>{
  const [movieData,setMovieData] = useState({})
  
    useEffect(async()=>{
        let data = await (await fetch("https://swapi.dev/api/films/1/")).json();
        setMovieData(data);
    },[])


    return (
      <div className="movie">
        <h1>{movieData.title}</h1>
        <h2>{movieData.director}</h2>
      </div>
    );
}
export default Movie;