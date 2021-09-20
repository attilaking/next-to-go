import React from 'react';
import '../style/components/racesList.scss';
import Timer from '../components/Timer';

const RacesList = (props) => {
    let listItems = "No data to display";

    if (props.ListData) {
        listItems = props.ListData.map((item) =>
            <tr key={item.race_id.toString()}>
                <td>{item.meeting_name}</td>
                <td>{item.race_number}</td>
                <td><Timer StartTime={item.advertised_start.seconds}/></td>
            </tr>
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
