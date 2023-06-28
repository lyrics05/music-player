
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Feed from './screens/Feed';
import Player from './screens/Player';
import Favorite from './screens/Favorite';
import Trending from './screens/Trending';
import Library from './screens/Library';
import Sidebar from './components/sidebar/Sidebar';
import { setClientToken } from './spotify';
import Login from './screens/auth/Login';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
  
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
         
          <Route path="/player" element={<Player />} />
         
        </Routes>
      </div>
  );
}

export default App;


/* return !token ? (
  <Login />
) : (

    <div className="main-body">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
); */