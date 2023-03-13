import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/homepage';
import { Nav } from './components/Nav/Nav';

// https://reactrouter.com/en/main/router-components/browser-router

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
