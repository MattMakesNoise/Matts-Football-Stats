import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Carousel from './components/Carousel/Carousel';
import Table from './components/Table/Table';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <Carousel />
          <div className='TableStats-wrapper'>
          <Table />
          <Stats />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;