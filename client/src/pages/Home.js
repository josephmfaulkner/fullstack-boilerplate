import React from 'react';
import { connect } from "react-redux";

import { fetchPosts } from '../store/actions/Posts';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ListCard from '../components/ListCard'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import './Home.css'

class Home extends React.Component{
    componentDidMount(){
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    render(){
        const { posts } = this.props;
        return(
            <React.Fragment>
                <CssBaseline />
                    <Grid container>
                        {posts.map((post, index) => (
                            <ListCard key={index} postData={post}/>
                        ))}
                    </Grid>
                    <Fab color="primary" aria-label="add" className="add-button">
                      <AddIcon />
                    </Fab>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { posts } = state.Posts;
    return { posts };
};

const mapDispatchToProps = {
    fetchPosts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
