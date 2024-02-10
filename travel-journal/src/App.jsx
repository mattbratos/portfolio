import './App.css'
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import travelEntries from './data/travelEntries'; 



function App() {

  return (
    <>
      <Header />
      <h1>React + Vite</h1>
      <main>
        <TravelFeed entries={travelEntries} />
      </main>
      <Footer />
    </>
  )
}

export default App
