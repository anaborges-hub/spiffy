import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Closet from './components/Closet/Closet';
import Homepage from './components/Homepage/homepage';
import Nav from './components/Nav/Nav';
import Carousel from './components/Carousel/Carousel';
import Gallery from './components/Gallery/Gallery';
import Item from './components/Item/Item';
import { CarouselItemType } from './types';
import items from './item.json';

// https://reactrouter.com/en/main/router-components/browser-router

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/closet" element={<Closet galleryView={true} />} />
        <Route path="/gallery" element={<Gallery items={items} />} />
        <Route path="/carousel" element={<Carousel items={items} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
