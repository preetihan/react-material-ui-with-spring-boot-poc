import React, { Component } from 'react'  
import { Line } from 'react-chartjs-2';  

export class LineChart extends Component {  
    constructor(props) {  
        super(props);  
        this.state = { Data: {} };  
    } 

    componentDidMount() {   
        this.setState({  
            Data: {  
                labels: ['January', 'February', 'March'],  
                datasets: [{  
                    label: 'Month',  
                    data: [{
                        x: 10,
                        y: 20
                    }, {
                        x: 15,
                        y: 50
                    }, {
                        x: 50,
                        y: 60
                    }],  
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                }]  
            }  
        });  
    }

    render() {  
        return (  
            <div>  
                <Line data={this.state.Data} />  
            </div>  
        )  
    }  
}  
  
export default LineChart