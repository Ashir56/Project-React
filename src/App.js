import { Route, Routes, useNavigate } from 'react-router-dom';
import AddNotes from './pages/addnotes';
import Notes from './pages/Notes';
import './App.css';
import { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/add-notes' element={<AddNotes />} />
      </Routes>
    </>
  );
}

export default App;
