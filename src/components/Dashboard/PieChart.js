import React from "react";
import Chart from "react-google-charts";
import newData from '../../Asset/data/data';
import './common.css';


class Charts1 extends React.Component {
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
                    width={'400px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Population', 'Early Population'],
                        ['Lucknow', 4200],
                        ['Gorakhpur', 3300],
                        ['Kanpur', 3550],
                    ]}
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