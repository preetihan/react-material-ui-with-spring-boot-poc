import React from 'react';
import ChartCard from '../component/ChartCard';
import CustomTable from '../component/CustomPaginationActionsTable';
import Grid from '@material-ui/core/Grid';

class Dashboard extends React.Component {
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