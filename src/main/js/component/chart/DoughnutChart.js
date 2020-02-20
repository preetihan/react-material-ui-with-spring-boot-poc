import React, { Component } from 'react'  
import { Doughnut } from 'react-chartjs-2';  

export class DoughnutChart extends Component {  
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
                    data: [65, 59, 80],  
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]  
            }  
        });  
    }

    render() {  
        return (  
            <div>  
                <Doughnut data={this.state.Data} />  
            </div>  
        )  
    }  
}  
  
export default DoughnutChart