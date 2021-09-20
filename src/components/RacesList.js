import React, { useEffect, useState } from 'react';
import '../style/components/racesList.scss';
import Timer from '../components/Timer';

const RacesList = (props) => {
    let listItems = "No data to display";
    const [elapsedItems, setElapsedItems] = useState([]);

    const onItemTimeElapsed = (id) => setElapsedItems(oldArray => [...oldArray, id]);

    if (props.ListData) {

        let sortedListData = props.ListData.sort((a, b) => parseInt(a.advertised_start.seconds) - parseInt(b.advertised_start.seconds));
        let sortedFilteredListData = sortedListData.filter(item => !elapsedItems.includes(item.race_id) && item.categoryid == props.Config.selectedCategory)

        listItems = sortedFilteredListData.map((item, index) => {
            if(index < props.Config.maxNrOfItems){
                return (
                    <tr key={item.race_id.toString()}>
                        <td>{item.meeting_name}</td>
                        <td>{item.race_number}</td>
                        <td><Timer OnTimeElapsed={(id) => onItemTimeElapsed(id)} StartTime={item.advertised_start.seconds} ItemId={item.race_id}/>
                        </td>
                    </tr>
                    )
            }
            else {
                return false;
            }
        }
        );
    }
    return (
        <div className="racesDisplayCont">
            <table className="">
                <thead>
                    <tr>
                        <th>Meeting Name</th>
                        <th>Race Number</th>
                        <th>Timer</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>
    )
}

export default RacesList;
