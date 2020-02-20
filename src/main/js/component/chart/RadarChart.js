import React, { Component } from 'react'  
import { Radar } from 'react-chartjs-2';  

export class RadarChart extends Component {  
    constructor(props) {  
        super(props);  
        this.state = { Data: {} };  
    } 

    componentDidMount() {   
        this.setState({  
            Data: {  
                labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
                datasets: [{
                    label: 'Activity', 
                    data: [15, 10, 30, 2],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Activity', 
                    data: [20, 25, 10, 20],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2
                }]
            }  
        });  
    }

    render() {  
        return (  
            <div>  
                <Radar data={this.state.Data} />  
            </div>  
        )  
    }  
}  
  
export default RadarChart