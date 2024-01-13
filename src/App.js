import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import RecordedVideo from "./pages/RecordedVideo";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stream/:id" element={<RecordedVideo />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
