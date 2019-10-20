import React from 'react';
import ListCard from '../components/ListCard'



import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';




class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        const cards = [1, 2, 3, 4, 5];

        return(
            <React.Fragment>
                <CssBaseline />
                    <Grid container spacing={4}>
                        {cards.map(card => (
                            <ListCard />
                        ))}
                    </Grid>
            </React.Fragment>
        );
    }
}

export default Home;
