import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
const useStyles = makeStyles({
  root: {
    minWidth: 150,
    width: 200,
    height: 400,
  },
  title: {
    fontSize: 20,
  },
  down:{
    marginBottom: 15
  }

});

interface ICard {
  min: number;
  max: number;
  condition: string;
  date: number;
}
const CardComponent: FC<ICard> = ({ min, max, condition, date }) => {
  const classes = useStyles();
  const dateObj = moment(date * 1000);
  const dateString = dateObj.format('ll');
  const today = moment().format('ll');
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant="h4"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {dateString === today ? 'Today' : dateString}
        </Typography>
        <Typography variant="h5">min: {`${min} C`}</Typography>
        <Typography variant="h5">max: {`${max} C`}</Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.down}
          color="textSecondary"
        >
          condition: {condition}
        </Typography>

        <Typography variant="body2" color="textSecondary">
          Sory for such poor design, actually I did what I thought is the most
          important
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
