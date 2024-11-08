
import React from "react";

const MovieCard = ({ movie }) => {
  return (
 


<div className="overflow-hidden m-2 w-[45%] md:w-[22%] lg:w-[16%]"> 
  {/* Movie Poster */}
  <div className="flex justify-center">
    <img
      src={movie.Poster}
      alt={movie.Title}
      className="w-full h-56 md:h-72 object-cover rounded-lg" 
    />
  </div>

  {/* Movie Info */}
  <div className="p-4">
    <h3 className="text-md font-bold text-black text-center mb-2">{movie.Title}</h3>
    <p className="text-xs text-gray-700 text-center">{movie.Year}</p>
  </div>
</div>


  

  );
};

export default MovieCard;
