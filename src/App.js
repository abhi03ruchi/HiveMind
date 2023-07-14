import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home/Home';
import TopBar from './components/TopBar/TopBar';
import './App.css';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className="container">
        <SideBar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
