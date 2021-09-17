import React from 'react';
// import { Router } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/pages/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
