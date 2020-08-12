import React from "react";
import Chart from "react-google-charts";
import newData from '../../Asset/data/data';

const getNormalizeData = (data) => {
    let tempData = [['Population', 'Yearly Population']];
    data.forEach(element => {
        tempData.push([element.city, element.people.male + element.people.female])
    });
    return tempData;
}

class Charts1 extends React.Component {
    state = {
        dataOf: [[]]
    }

    componentDidMount() {
        this.setState({ dataOf: getNormalizeData(newData) })
    }

    render() {
        return (
            <div >
                <Chart
                    width={'400px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.dataOf}
                    options={{
                        title: 'All Population',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}

export default Charts1;