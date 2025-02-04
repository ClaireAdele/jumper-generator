import './App.css';
import Homepage from './components/homepage/Homepage';
import Profile from './components/profile/Profile';
import DataEntry from './components/pattern-data-entry/DataEntry';
import { Routes, Route } from "react-router-dom";
import YokeJumperPattern from './components/pattern-data-entry/pattern-templates/YokeJumperPattern';
import { SignedInUserContextProvider } from './contexts/SignedInUserContext';

function App() {
  return (
    <div className="App">
      <SignedInUserContextProvider value={{}}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/data-entry"
            element={<DataEntry />}
          />
          <Route
            path="/yoke-pattern"
            element={<YokeJumperPattern />}
          />
        </Routes>
      </SignedInUserContextProvider>
    </div>
  );
}

export default App;
