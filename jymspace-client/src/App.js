import { Route, Routes,  } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About/About";
import Signin from './components/Signin/Signin';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/Signin" element={<Signin />} />
      </Routes>
     
    </div>
  );
}

export default App;
