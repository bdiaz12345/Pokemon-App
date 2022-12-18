import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Liked from './views/Liked';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route element={<Dashboard/>} exact path='/'/>
        <Route element={<Liked/>} path='/liked'/>
      </Routes>
    </div>
  );
}

export default App;
