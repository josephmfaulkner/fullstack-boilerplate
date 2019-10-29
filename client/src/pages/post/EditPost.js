import React from 'react';
import { connect } from "react-redux";

import { editPost, deletePost } from '../../store/actions/Posts';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

import BackspaceIcon from '@material-ui/icons/Backspace';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import './PostForms.css';

class EditPost extends React.Component {


  constructor(props){
    super(props);

    const { post } = this.props;  
    this.state = { title: post.title, description: post.description, editMode: false };

    this.onTitleChange       = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.toggleEdit          = this.toggleEdit.bind(this);

    this.onDelete      = this.onDelete.bind(this);
    this.onSaveChanges = this.onSaveChanges.bind(this);

  }

  toggleEdit(){ 
    const { post } = this.props; 
    this.setState({
      title: post.title, 
      description: post.description,
      editMode: !this.state.editMode
    }); 
  }
  onTitleChange(event){ this.setState({title: event.target.value}); }
  onDescriptionChange(event){ this.setState({description: event.target.value}); }

  onSaveChanges(){
    const { postID, editPost } = this.props; 
    const { title, description } = this.state; 
    editPost(postID, title, description);
  }

  onDelete(){
    const { postID, deletePost } = this.props; 
    deletePost(postID);
  }

  render(){
    return(
      <React.Fragment>
        <CssBaseline />
        <Grid container
              justify="center"
              alignItems="center"
        >
          <Grid item xs={12}>
            <form noValidate autoComplete="off">
              <TextField
                disabled={!this.state.editMode}
                value={this.state.title}
                onChange={this.onTitleChange}
                id="title-field"
                label="Title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                disabled={!this.state.editMode}
                value={this.state.description}
                onChange={this.onDescriptionChange}
                id="description-field"
                label="Description"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
          {
          (!this.state.editMode) &&
          <Grid container
                justify="center"
                alignItems="center"
          >
            <Grid item xs={12} sm={4}>
              <RouterLink to="/" className="ButtonLink">
                <Button
                  fullWidth
                  className="PostButton"
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<BackspaceIcon />}
                >
                  Close
                </Button>
              </RouterLink>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                className="PostButton"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<EditIcon />}
                onClick={this.toggleEdit}
              >
                Edit
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                className="PostButton"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<DeleteIcon />}
                onClick={this.onDelete}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
          }
          {
          (this.state.editMode) &&
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                className="PostButton"
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<CancelIcon />}
                onClick={this.toggleEdit}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                className="PostButton"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={this.onSaveChanges}
              >
                Save
              </Button>
            </Grid>
          </Grid>
          }
        </Grid>
      </React.Fragment>
    )
  }
}

const filterPostByID = (posts, postID) => {
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id == postID) {
        return posts[i];
    }
  }
  return { title: "", description: ""};
}

const mapStateToProps = (state, ownProps) => {
  const { posts } = state.Posts;
  const postID = ownProps.match.params.id
  const post = filterPostByID(posts, postID);

  return { postID, post };
};

const mapDispatchToProps = {
  editPost, 
  deletePost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);