import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
color: darkMode ? 'white' : '#0f172a',
transition: '0.3s',
          fontFamily: 'Arial',
        }}
      >
        <nav
          style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #334155',
          }}
        >
          <h2>NovaCart Products ✨</h2>

          <div>
            <Link
              to="/"
              style={{
                color: darkMode ? 'white' : '#0f172a',
                marginRight: '20px',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Home
            </Link>

            <Link
              to="/favorites"
              style={{
               color: darkMode ? 'white' : '#0f172a',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Favorites
            </Link>
            <button
  onClick={() => setDarkMode(!darkMode)}
  style={{
    marginLeft: '20px',
    padding: '10px 16px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: darkMode ? '#334155' : '#cbd5e1',
    color: darkMode ? 'white' : 'black',
    fontWeight: 'bold',
  }}
>
  {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;