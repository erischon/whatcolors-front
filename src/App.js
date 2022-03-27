import React from "react"

import { Routes, Route } from "react-router-dom"

import Home from "./routes/home.route";
import SignIn from "./routes/sign-in.route";


const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    )
}

export default App;
