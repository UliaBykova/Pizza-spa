import './App.css';
import React from 'react' 
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Products from './components/Products/Products'


const App = () => {
  return (
    <div className="app">
         <Navbar />
         <Header />
            <div className="content">
              <Route path='/pizza'
                render={() => <Products />} />
            </div>
    </div>
  )
}

export default App;
