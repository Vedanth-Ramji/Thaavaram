import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";

import HomePage from "./pages/homePage";
import SubmitPage from "./pages/submitPage";
import BrowsePage from "./pages/browsePage";

import { getSubmissions } from "./actions/submissionsActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubmissions());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/browse" element={<BrowsePage />} />
      </Routes>
    </Router>
  );
};

export default App;