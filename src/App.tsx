import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Homes/Home";
import ErrorPage from "./modules/Errors/ErrorPage";
const App = () => {
  return (
    <BrowserRouter>
      <div data-testId="todo">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
