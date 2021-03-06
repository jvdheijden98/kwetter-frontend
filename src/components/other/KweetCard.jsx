import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

class KweetCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
}

  render (){
    const { classes } = this.props;
    
    return (
      <Card style={{marginTop: "20px"}} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title={this.props.username}
          subheader={this.props.timeCreated}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.message}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        </CardActions>      
      </Card>
    )
  }


}

export default withStyles(useStyles)(KweetCard);