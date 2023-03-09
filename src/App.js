import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from "./components/Nav";
import Sitings from "./components/Sitings";

function App() {
  return (
    <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<Sitings/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
