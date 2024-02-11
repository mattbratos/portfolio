import './App.css'
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import travelEntries from './data/travelEntries'; 
import TravelFeed from './components/TravelFeed/TravelFeed';



function App() {

  return (
    <>
      <Header />
      <TravelFeed/>
      <Footer />
    </>
  )
}

export default App
