// import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import HackerRepublic from "./pages/republic";
import MessageBoard from "./pages/messageBoard";



const Routing = () => {

  return (
    <>
      <Routes>
      <Route path='/' element={ <Landing /> } />
      <Route path='/republic' element={ <HackerRepublic /> } />
      <Route path='/message' element={ <MessageBoard /> } />
      </Routes>
    </>
  );
};

export default Routing;