import './App.css';
import Homepage from './components/homepage/Homepage';
import { useNavigate, Routes, Route } from "react-router-dom";
import Navbar from './components/homepage/NavBar';
import SignIn from './components/sign-in/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage navigate={useNavigate()} />} />
        <Route path="/signin" element={<SignIn navigate={useNavigate()} />} />
      </Routes>
    </div>
  );
}

export default App;
