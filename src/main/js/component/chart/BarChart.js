import React, { Component } from 'react'  
import { Bar } from 'react-chartjs-2';  

export class BarChart extends Component {  
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
                    data: [70, 67, 80],  
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
                <Bar data={this.state.Data} />  
            </div>  
        )  
    }  
}  
  
export default BarChart