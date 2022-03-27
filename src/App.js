import React from "react"

import { Routes, Route, Outlet } from "react-router-dom"

import Home from "./routes/home.route";

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    )
}

export default App;
