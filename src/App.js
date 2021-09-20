import React from 'react';
import { useEffect, useState } from 'react';
import './style/App.scss';
import Header from './components/Header';

function App() {
  const [races, setRaces] = useState(null);
  useEffect(() => {
    async function getRaceData() {
      const res = await fetch('https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10');
      const raceData = await res.text();
      setRaces(raceData);
    }
    getRaceData();
  }, []);

  useEffect(() => {
    console.log(races)
  }, [races])
  return (
    <>
      <Header Title="Next To Go" />
      <main>
      </main>
    </>
  );
}

export default App;
