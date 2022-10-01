import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//import pages
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import SingleMovie from "./pages/SingleMovie";
import SingleTv from "./pages/SingleTv";

//import component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie/:id" element={<SingleMovie />}></Route>
        <Route path="/search/:term" element={<Movies />}></Route>
        <Route path="/tv/:id" element={<SingleTv />}></Route>
        <Route path="/404" element={<Error />}></Route>
        <Route path="*" element={<Navigate replace to="/404" />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
