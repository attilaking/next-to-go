import React from 'react';
import { useEffect, useState } from 'react';
import './style/App.scss';
import Header from './components/Header';
import RacesList from './components/RacesList';
import LoadingSpinner from './components/LoadingSpinner';
import configData from "./config.json";

function App() {

  const [races, setRaces] = useState(null);

  async function getRaceData() {
    fetch(configData.API_URL, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network error');
        }
        return response.json();
      })
      .then(raceData => {
        let dataArray = [];
        let dataObject = raceData.data.race_summaries;

        for (const prop in dataObject) {

          dataArray.push(
            {
              "meeting_name": dataObject[prop]["meeting_name"],
              "race_number": dataObject[prop]["race_number"],
              "race_id": dataObject[prop]["race_id"],
              "category_id": dataObject[prop]["category_id"],
              "advertised_start": dataObject[prop]["advertised_start"],
            }
          )
        }
        setRaces(dataArray);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  useEffect(() => {
    getRaceData();
  }, []);

  if (!races)
    return (
      <LoadingSpinner Backdrop={true} />
    )
  else
    return (
      <>
        <Header Title="Next To Go App" />
        <main>
          <RacesList ListData={races} Config={{ "maxNrOfItems": 5, "sort" : "asc"}} />
        </main>
      </>
    );
}

export default App;
