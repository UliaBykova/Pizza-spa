import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import store from './components/redux/redux-store';
import ContentContainer from './components/Content/ContentContainer';
import ModalElem from './components/common/Modal/ModalElem';
import Auth from './components/Auth/Auth';
import { Provider } from 'react-redux';

const App = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Header setModalActive={setModalActive} />
        <div className="content">
          <ContentContainer />
          <ModalElem modalActive={modalActive} setModalActive={setModalActive}>
            <Auth />
          </ModalElem>
        </div>
      </div>
    </Provider>
  );
};

export default App; /*  */

//json-server --watch info.json
