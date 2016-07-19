import React from 'react';

import LineChart from './LineChartAsync';
import BarChart from './BarChartAsync';

export default class App extends React.Component {
    state = {
        showCharts: false
    };

    handleChange = () => {
        this.setState({
            showCharts: !this.state.showCharts
        });
    }

    render() {
        return (
            <div>
                Show charts:
                <input
                  type="checkbox"
                  value={this.state.showCharts}
                  onChange={this.handleChange}
                />

                {
                    this.state.showCharts ?
                    <div><LineChart/><BarChart/></div>
                    : null
                }
            </div>
        );
    }
}
