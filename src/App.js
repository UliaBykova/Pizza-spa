import './App.css';
import React, { useState } from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Provider } from "react-redux";
import store from './components/redux/redux-store';
import ContentContainer from './components/Content/ContentContainer';
import ModalElem from './components/common/Modal/ModalElem';
import Auth from './components/Auth/Auth';

const App = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Header setModalActive={setModalActive} />
        <div className="content">
          <ContentContainer />
          <ModalElem active={modalActive} setActive={setModalActive}>
              <Auth />
          </ModalElem>
        </div>
      </div>
    </Provider>
  )
}

export default App;/*  */

//json-server --watch info.json
