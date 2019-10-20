import React from 'react';
import ListCard from '../components/ListCard'

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import {getPosts} from '../api/posts';



class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        getPosts().then((fetchedPosts)=>{
            console.log(fetchedPosts);
            this.setState({posts: fetchedPosts});
        })
    }

    render(){
        const { posts } = this.state;
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

export default Home;
