import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/Navbar';
import Login from "./components/Login/Login";

import { useStateValue } from './config/StateProvider'

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

  const [{user}] = useStateValue();

  return (
    <React.Fragment>
      <div className="app" >
        {!user ? (
          <>
            <CssBaseline />
            <Login />
          </>
        ) : (
            <>
              <Router>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                  <NavBar />
                  <Switch>
                    <Route path="/doctor-login">
                      <h1>This is doctor view</h1>
                    </Route>
                    <Route exact path="/">
                      <Home />
                    </Route>
                  </Switch>
                </MuiThemeProvider>
              </Router>
            </>
          )
        }
      </div>
    </React.Fragment>
  );
}

export default App;