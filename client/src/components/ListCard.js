import React from 'react';

import './ListCard.css';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class ListCard extends React.Component {

    render(){
        const { postData } = this.props;
        return(
        <Grid item xs={12}>
          <Card className="ListCard">
            <CardMedia
                image="https://source.unsplash.com/random"
                title="Image title"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {postData.title}
                </Typography>
                <Typography>
                    {postData.description}
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        );
    }
}

export default ListCard;