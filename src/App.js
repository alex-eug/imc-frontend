import {
  Routes,
  Route,
} from "react-router-dom";

import Headers from './Components/Header/Headers';
import Home from "./Components/Home/Home";
import Signin from './Components/Signin/Signin';
import Login from './Components/Login/Login';
import './App.css';


function App() {
  return (
    <div className="App">
    <Headers />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="signin" element={<Signin />} />
    <Route path="login" element={<Login />} />
  </Routes>
    
    </div>
  );
}

export default App;
