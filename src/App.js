import React from 'react';
import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'
import Details from './Pages/Details/Details';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" exact element={<Trending />} />
            <Route path="/movies" exact element={<Movies />} />
            <Route path="/series" exact element={<Series />} />
            <Route path="/search" exact element={<Search />} />
            <Route path="/details/:type/:id" element={<Details />} />
          </Routes>
        </Container>
      </div>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;