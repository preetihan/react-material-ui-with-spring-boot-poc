import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          This website was developed on Macbook Pro! 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          with Visual Studio Code
        </Typography>
        <Typography variant="body2" component="p">
          and React with Material design.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Thank you!</Button>
      </CardActions>
    </Card>
  );
}
