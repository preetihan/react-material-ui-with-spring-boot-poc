import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DoughnutChart from './chart/DoughnutChart';
import BarChart from './chart/BarChart';
import LineChart from './chart/LineChart';
import RadarChart from './chart/RadarChart';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 400,
      maxHeight: 400,
    },
}));

export default function ChartCard() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardHeader title="Doughnut Chart" />
                    <CardContent>
                        <DoughnutChart />
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardHeader title="Bar Chart" />
                    <CardContent>
                        <BarChart />
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardHeader title="Line Chart" />
                    <CardContent>
                        <LineChart />
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardHeader title="Radar Chart" />
                    <CardContent>
                        <RadarChart />
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}