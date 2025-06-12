import { useState } from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import movieLogo from './assets/mov.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header id="logo-name">
        <img src={movieLogo} />
        <h1>FLIXSTER</h1>
        <img src={movieLogo} />
      </header>

      <main>
        <MovieList />
      </main>

      <footer>
        <p>Est. 2025 @ Meta</p>
      </footer>
    </div>
  );
}

export default App



