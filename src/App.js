import React from 'react';
import { render } from 'react-dom';
import './App.css';
import Header from "./components/header/Header";
import Carousel from './components/Carousel/Carousel';
import Table from './components/Table/Table';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import Apicall from './components/api/Apicall';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Apicall /> */}
        <div className="App-body">
          <Carousel />
          <Table />
          <Stats />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;