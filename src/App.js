import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import TeamBanner from './components/TeamBanner/TeamBanner';
import Table from './components/Table/Table';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <TeamBanner teamname="Norwich City"/>
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