import React from "react";
import Chart from "react-google-charts";
import newData from '../../Asset/data/data';

const getNormalizeData = (data) => {
    let tempData = [['City', 'Male Population', 'Female Population']];
    data.forEach(element => {
        tempData.push([element.city + ', ' + element.state, element.people.male, element.people.female])
    });
    return tempData;
}

class Charts extends React.Component {
    state = {
        dataOf: [[]]
    }

    componentDidMount() {
        this.setState({ dataOf: getNormalizeData(newData) });
    }

    render() {
        return (
            <div >
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.dataOf}
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