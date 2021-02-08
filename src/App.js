import './App.css';
import React from 'react' 
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import ListElem from './components/ListElem';

const App = () => {
  return (
    <div className="app">
         <Navbar />
         <Header />
            <div className="content">
              <Route path='/hit'
                render={() => <ListElem />} />
            </div>
    </div>
  )
}

export default App;
