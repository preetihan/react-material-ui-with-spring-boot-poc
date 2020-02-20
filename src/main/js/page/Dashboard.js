import React from 'react';
import ChartCard from '../component/ChartCard';
import CustomTable from '../component/CustomPaginationActionsTable';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class Dashboard extends React.Component {

    state = {
        messages: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/test')
          .then(function (response) {
            console.log(response.data);
        });
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ChartCard />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTable />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomTable />
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard