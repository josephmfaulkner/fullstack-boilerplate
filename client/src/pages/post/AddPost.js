import React from 'react';
import { connect } from "react-redux";

import { addPost } from '../../store/actions/Posts';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

import './PostForms.css';

class AddPost extends React.Component {

  constructor(props){
    super(props);

    this.state = {title: "", description: ""};

    this.onTitleChange       = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.savePost            = this.savePost.bind(this);

  }

  onTitleChange(event){
    this.setState({title: event.target.value});
  }

  onDescriptionChange(event){
    this.setState({description: event.target.value});
  }

  savePost(){
    const { addPost } = this.props;
    const { title, description} = this.state;
    addPost(title, description);
  }

  render(){
    return(
      <React.Fragment>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12}>
            <form noValidate autoComplete="off">
              <TextField
                id="title-field"
                label="Title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.onTitleChange}
              />
              <TextField
                id="description-field"
                label="Description"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.onDescriptionChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RouterLink to="/" className="ButtonLink">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                className="PostButton"
                startIcon={<CancelIcon />}
              >
                Cancel
              </Button>
            </RouterLink>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              className="PostButton"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              onClick={this.savePost}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
  return {  };
};

const mapDispatchToProps = {
  addPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);