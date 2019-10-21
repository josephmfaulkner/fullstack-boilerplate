import React from 'react';
import { connect } from "react-redux";

import ListCard from '../components/ListCard'

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import {getPosts} from '../api/posts';

import { setPosts } from '../store/actions/Posts';


class Home extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        /*
        getPosts().then((fetchedPosts)=>{
            console.log(fetchedPosts);
            this.setState({posts: fetchedPosts});
        })
        */
    }

    render(){
        const { posts } = this.props;
        return(
            <React.Fragment>
                <CssBaseline />
                    <Grid container spacing={4}>
                        {posts.map((post, index) => (
                            <ListCard key={index} postData={post}/>
                        ))}
                    </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { posts } = state.Posts;
    return { posts };
};

const mapDispatchToProps = {
    setPosts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
