import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Closet from './components/Closet/Closet';
import Homepage from './components/Homepage/homepage';
import Nav from './components/Nav/Nav';
import SingleItem from './components/SingleItem/SingleItem';

// https://reactrouter.com/en/main/router-components/browser-router

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/closet" element={<Closet />} />
        <Route
          path="/closet/:id"
          element={
            <SingleItem
              imageSrc=""
              imageAlt=""
              id=""
              season=""
              colour={[]}
              style={[]}
              brand=""
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
