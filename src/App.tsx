import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage/homepage';
import Nav from './components/Nav/Nav';

// https://reactrouter.com/en/main/router-components/browser-router

function App() {
  return (
    <BrowserRouter>
      <Nav open={false} />
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
