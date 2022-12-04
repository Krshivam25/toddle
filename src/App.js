import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import HomeScreen from "./screens/home/HomeScreen";
import NewPost from "./screens/post/NewPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
