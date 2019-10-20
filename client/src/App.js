import React from 'react';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as UILink } from '@material-ui/core/Link';

import './App.css';

function App() {
  return (
    <Router>
      <AppBar className="mainHeader">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" noWrap>
                Fullstack Application
            </Typography>
          </Toolbar>
      </AppBar>
      <Container maxWidth="md" className="mainContainer">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
