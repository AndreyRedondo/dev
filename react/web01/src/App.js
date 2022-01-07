import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import './App.css';
import Api from "./components/Api/Api";
import Login from './components/Login/Login';
import Error from "./components/Error/Error";

function App() {
  return (
   <Router>
     <nav>
       <Link to="/Login">Login</Link>
       <Link to="/Api">Api</Link>
     </nav>
     <Routes>
       <Route path="Login" element={<Login />} />
       <Route path="Api" element={<Api />} />
       <Route path="*" element={<Error />} />
     </Routes>
   </Router>
  );
}

export default App;
