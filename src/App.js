import React from 'react';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import RacesList from './components/RacesList';
import LoadingSpinner from './components/LoadingSpinner';
import AppErrorBoundary from './components/AppErrorBoundary';

import './style/App.scss';
import configData from './config.json';

function App() {

  const [races, setRaces] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function getRaceData() {
    fetch(configData.API_URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          setErrorMessage('A network error has occured')
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
      <AppErrorBoundary>
        {!races ?
          <LoadingSpinner error={errorMessage} /> :
          <>
            <Header title="Next To Go App" />
            <main>
              <RacesList listData={races} config={{ 'maxNrOfItems': 5, 'sort': 'asc', 'removeTime': 60 }} />
            </main>
          </>
        }
      </AppErrorBoundary>
    </>
  );
}

export default App;
