import './App.css';
import Homepage from './components/homepage/Homepage';
import Profile from './components/profile/Profile';
import DataEntry from './components/pattern-data-entry/DataEntry';
import { useNavigate, Routes, Route } from "react-router-dom";
import YokeJumperPattern from './components/pattern-data-entry/pattern-templates/YokeJumperPattern';
import { SignedInUserContextProvider } from './contexts/SignedInUserContext';

function App() {
  return (
    <div className="App">
      <SignedInUserContextProvider value={{}}>
        <Routes>
          <Route path="/" element={<Homepage navigate={useNavigate()} />} />
          <Route
            path="/profile"
            element={<Profile navigate={useNavigate()} />}
          />
          <Route
            path="/data-entry"
            element={<DataEntry navigate={useNavigate()} />}
          />
          <Route
            path="/yoke-pattern"
            element={<YokeJumperPattern navigate={useNavigate()} />}
          />
        </Routes>
      </SignedInUserContextProvider>
    </div>
  );
}

export default App;
