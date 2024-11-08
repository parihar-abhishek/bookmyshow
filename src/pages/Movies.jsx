import React, { useEffect, useState } from "react";


import MovieCard from "../components/MovieCard";
import CarouselPage from "../components/HeroCarousel";

import Navbar from "../components/Navbar";
import MobileBottomNav from "../components/MobileNav";

const MoviesPage = ({title}) => {



  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("Fetching movies...");
        const response = await fetch(   `https://www.omdbapi.com/?apikey=5573db5&s=${searchQuery || "batman"}` ); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Response data:", data);
        setMovies(data.Search || []); // Use fallback if Search is undefined
      } catch (error) {
        setError("Failed to load movies.");
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };


    if (searchQuery.length >= 3 || searchQuery === "") {
      fetchMovies();
    }

    
  }, [searchQuery]);

  if (loading) return <p className="text-white p-4">Loading movies...</p>;
  if (error) return <p className="text-white p-4">{error}</p>;

  return (
   

   <div >
    


      {/* Navbar */}
      <Navbar setSearchQuery={setSearchQuery} />


     


      <CarouselPage />


    


  
      {/* Movies Display */}


<div className="flex justify-center bg-[#f5f5f5] p-4 min-h-screen">
  <div className="w-full max-w-6xl">
    <h1 className="text-black text-2xl font-bold mb-8">{title}</h1>
    <div className="flex flex-wrap justify-center gap-4">
      {movies.length === 0 ? (
        <p className="text-black text-center">No movies found.</p>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      )}
    </div>
  </div>
</div>





 <MobileBottomNav />



 </div>
  );
};

export default MoviesPage;


