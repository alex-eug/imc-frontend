import {
 
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Signin from './Components/Signin/Signin';
import Login from './Components/Login/Login';
import MyImc from "./Components/MyImc/MyImc";
import ShowImc from "./Components/ShowImc/ShowImc";

import './App.css';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="signin" element={<Signin />} />
    <Route path="login" element={<Login />} />
    <Route path="/myimc" element={<MyImc />} />
    <Route path="/showimc" element={<ShowImc />} />
    </Routes>
    <NavBar />
    
    </div>
  );
}

export default App;
