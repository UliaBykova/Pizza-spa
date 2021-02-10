import './App.css';
import React from 'react' 
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import  ProductsContainer from './components/Products/ProductsContainer'
import {Provider} from "react-redux";
import store from './components/redux/redux-store';
import Pizza from './components/Pizza'


const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
         <Navbar />
         <Header />
            <div className="content">
              
              <Route path='/pizza'
                render={() => <ProductsContainer />} />
              <Route path='/hit'
                render={() => <Pizza />} />
            </div>
      </div>
    </Provider>
  )
}

export default App;
