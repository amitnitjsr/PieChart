import React from "react";
import Chart from "react-google-charts";
import newData from '../../Asset/data/data';
import './common.css';


class Charts extends React.Component {
    state = {
        dataOf: []
    }
    componentDidMount() {
        let tmp = [];
        tmp = newData.map((val) => {
            let t = val.city + ',' + val.state + ',' + val.people.male + ',' + val.people.female;
            return t;
        });
        console.log('new...', tmp)
        this.setState({ dataOf: tmp })
    }
    render() {
        return (
            <div >
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['City', 'Male Population', 'Female Population'],
                        ['Gorakhpur, UP', 1800, 1500],
                        ['Lucknow, UP', 2000, 2200],
                        ['Kanpur, UP', 1850, 1700],
                    ]}
                    options={{
                        title: 'Population of Largest U.P. Cities',
                        chartArea: { width: '50%' },
                        hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'City',
                        },
                    }}
                />
            </div>
        );
    }
}

export default Charts;