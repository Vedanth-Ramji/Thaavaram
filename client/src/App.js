import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import HomePage from "./pages/homePage";
import SubmitPage from "./pages/submitPage";
import BrowsePage from "./pages/browsePage";
import RegisterPage from "./pages/registerPage";
import TeamPage from "./pages/teamPage";

import { getSubmissions } from "./actions/submissionsActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubmissions());
  }, [dispatch]);

  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/world-congress" element={<RegisterPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
