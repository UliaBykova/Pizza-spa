import './App.css';
import React from 'react' 
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import ProductsTest from './components/ProductsTest';

const App = () => {
  return (
    <div className="app">
         <Header />
            <div className='container'>
              <Route path='/hit'
                render={() => <ProductsTest />} />
            </div>
    </div>
  )
}

export default App;
