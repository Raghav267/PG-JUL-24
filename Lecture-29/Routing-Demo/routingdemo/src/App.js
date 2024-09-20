import './App.css';
import Home from "./components/Home";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Special from './components/Special';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="App">
      <nav>
        <ul>
          <li ><Link to={"/home"}> Home</Link></li>
          <li onClick={() => setPage("cat")}><Link to={"/cat"}> Cat</Link></li>
          <li onClick={() => setPage("dog")}><Link to={"/dog"}> Dog</Link></li>
        </ul>
      </nav>
      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/cat' element={<Cat />} />
        <Route path='/dog' element={<Dog />} />
        <Route path="/dog/:dogId" element={<Special />} />

        {/* {page == "home" && <Home />}
      {page == "cat" && <Cat />}
      {page == "dog" && <Dog />} */}
      </Routes>


    </div>
  );
}

export default App;
