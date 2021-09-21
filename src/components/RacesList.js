import React, { useEffect, useState } from 'react';
import '../style/components/racesList.scss';
import Timer from '../components/Timer';
import configData from "../config.json";

const RacesList = (props) => {
    let listItems = "No data to display";
    const [elapsedItems, setElapsedItems] = useState([]);
    const [listOrder, setListOrder] = useState(props.Config.sort);

    const onItemTimeElapsed = (id) => setElapsedItems(oldArray => [...oldArray, id]);
    const [selectedCategory, setSelectedCategory] = useState(configData.CATEGORIES[0].id);

    if (props.ListData) {

        let sortedListData = listOrder === "asc" ?
            props.ListData.sort((a, b) => parseInt(a.advertised_start.seconds) - parseInt(b.advertised_start.seconds)) :
            props.ListData.sort((a, b) => parseInt(b.advertised_start.seconds) - parseInt(a.advertised_start.seconds));
        let sortedFilteredListData = sortedListData.filter(item => !elapsedItems.includes(item.race_id) && item.category_id === selectedCategory);

        listItems = sortedFilteredListData.map((item, index) => {
            if (index < props.Config.maxNrOfItems) {
                return (
                    <tr key={item.race_id.toString()}>
                        <td>{item.meeting_name}</td>
                        <td>{item.race_number}</td>
                        <td>
                            <Timer
                                OnTimeElapsed={(id) => onItemTimeElapsed(id)}
                                Config={{
                                    "startTime": item.advertised_start.seconds,
                                    "itemId": item.race_id,
                                    "removeTime": props.Config.removetime
                                }} />
                        </td>
                    </tr>
                )
            }
            else {
                return false;
            }
        });
    }

    return (
        <div className="racesDisplayCont">
            <div className="racesDisplayCont__header">
                Races
            </div>
            <div className="racesDisplayCont__content">
                <div className="racesDisplayCont__content__filters">
                    <select className="minimal" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                        {configData.CATEGORIES.map(item =>
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        )}
                    </select>
                    <select className="minimal" onChange={(e) => setListOrder(e.target.value)} value={listOrder}>
                            <option value="asc">
                                Ascending
                            </option>
                            <option value="desc">
                                Descending
                            </option>
     
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Race Number</th>
                            <th>Timer Left</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RacesList;