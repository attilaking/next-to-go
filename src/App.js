import React from 'react';
import { useEffect, useState } from 'react';
import './style/App.scss';
import Header from './components/Header';
import RacesList from './components/RacesList';
import LoadingSpinner from './components/LoadingSpinner';
import configData from "./config.json";

function App() {

  const [races, setRaces] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function getRaceData() {
    fetch(configData.API_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          setErrorMessage("A network error has occured")
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
        setErrorMessage(`There has been a problem with your fetch operation: ${error}`);
      });
  }

  useEffect(() => {
    getRaceData();
  }, []);

  return (
    <>
      {!races ? <LoadingSpinner Backdrop={true} Error={errorMessage}/> :
        <>
          <Header Title="Next To Go App" />
          <main>
            <RacesList ListData={races} Config={{ "maxNrOfItems": 5, "sort": "asc" }} />
          </main>
        </>}
    </>
  );
}

export default App;
