import './App.css';
import React from 'react' 
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
       <div className="wrapper">
       <Navbar />
        <Header />
       </div>
    </div>
  )
}

export default App;
