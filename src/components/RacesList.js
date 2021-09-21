import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Timer from '../components/Timer';

import configData from '../config.json';
import '../style/components/racesList.scss';

const RacesList = (props) => {
    let listItems = 'No data to display';
    const [elapsedItems, setElapsedItems] = useState([]);
    const [listOrder, setListOrder] = useState(props.Config.sort);
    const [maxNrOfItems, setmaxNrOfItems] = useState(props.Config.maxNrOfItems);

    const onItemTimeElapsed = (id) => setElapsedItems(oldArray => [...oldArray, id]);
    const [selectedCategory, setSelectedCategory] = useState(0);

    if (props.ListData) {

        let sortedListData = listOrder === 'asc' ?
            props.ListData.sort((a, b) => parseInt(a.advertised_start.seconds) - parseInt(b.advertised_start.seconds)) :
            props.ListData.sort((a, b) => parseInt(b.advertised_start.seconds) - parseInt(a.advertised_start.seconds));

        let sortedFilteredListData = sortedListData
            .filter(item => !elapsedItems.includes(item.race_id) && (item.category_id === selectedCategory || selectedCategory == 0));

        listItems = sortedFilteredListData.map((item, index) => {

            if (index < maxNrOfItems) {
                return (
                    <tr key={item.race_id.toString()}>
                        <td>{item.meeting_name}</td>
                        <td>{item.race_number}</td>
                        <td>
                            <Timer
                                OnTimeElapsed={(id) => onItemTimeElapsed(id)}
                                Config={{
                                    'startTime': item.advertised_start.seconds,
                                    'itemId': item.race_id,
                                    'removeTime': props.Config.removeTime
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

    const onShowMore = () =>
        setmaxNrOfItems(listItems.length);

    useEffect(() => {
        setmaxNrOfItems(props.Config.maxNrOfItems)
    }, [selectedCategory]);

    return (
        <div className="racesDisplayCont">
            <div className="racesDisplayCont__header">
                Races
            </div>
            <div className="racesDisplayCont__content">
                <div className="racesDisplayCont__content__filters">
                    <select className="minimal" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                        <option key={0} value={0}>
                            All Categories
                        </option>
                        {configData.CATEGORIES.map(item =>
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        )}
                    </select>
                    <select className="minimal" onChange={(e) => setListOrder(e.target.value)} value={listOrder}>
                        <option value="asc">
                            Ascending (time)
                        </option>
                        <option value="desc">
                            Descending (time)
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
                {listItems.length > maxNrOfItems ?
                    <span onClick={onShowMore} className="racesDisplayCont__content__showMore">
                        Show all...
                    </span> : <></>
                }
                {listItems.length < 1 ?
                    <span>
                        No data to show
                    </span> : <></>}
            </div>
        </div>
    )
}

RacesList.propTypes = {
    ListData: PropTypes.array,
    Config: PropTypes.object
};

export default RacesList;