import './App.css';
import React from 'react' 
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Provider} from "react-redux";
import store from './components/redux/redux-store';
import ContentContainer from './components/Content/ContentContainer';


const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
         <Navbar />
         <Header />
            <div className="content">
              <ContentContainer />
            </div>
      </div>
    </Provider>
  )
}

export default App;

//json-server --watch info.json
