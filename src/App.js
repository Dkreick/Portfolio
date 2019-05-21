import React from 'react';
import './App.scss';
import ButtonAppBar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import ContentList from './pages/ContentList';
import { BrowserRouter, Route } from 'react-router-dom';
import SimpleSimon from './pages/Games/SimpleSimon';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='app'>
        <ButtonAppBar />
        <Sidebar />
        <div className='container'>
          <Route exact path='/' component={ContentList} />
          <Route exact path='/ContentList' component={ContentList} />
          <Route exact path='/SimpleSimon' component={SimpleSimon} />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
