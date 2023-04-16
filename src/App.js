
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Explore from "./containers/Explore";
import {BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Store from "./containers/Store";
import Art from "./containers/ArtPage";
import Profile from "./containers/ArtistProfile";
import Home from "./containers/Home";
import ScrollToTop from './components/ScrollToTop';
import Login from './Authentication/Login';
import Register from './Authentication/Register';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />}  />
        <Route path="/art/:id" element={<Art />}  />
        <Route path="/store" element={<Store />}  />
        <Route path="/profile/1" element={<Profile />}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={ <Register/>}  />
      </Routes>
    </Router>
  );
}

export default App;
