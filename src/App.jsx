import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import ToneSelector from "./components/ToneSelector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import QuoteApp from "./pages/QuoteApp";

const App = () => {
 
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/app" element={<QuoteApp />} />
</Routes>
</BrowserRouter>
  );
};

export default App;
