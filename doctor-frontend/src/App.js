import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#115293'
    },
    secondary: {
      main: '#ff4081'
    }
  }
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="app" >
            <NavBar />
            <Switch>
              <Route path="/doctor-login">
                <h1>This is doctor view</h1>
              </Route>
              <Route path="/login">
                <h1>This is login page</h1>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;