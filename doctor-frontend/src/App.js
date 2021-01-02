import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/Navbar';
import Login from "./components/Login/Login";
import Patients from "./components/Patients/Patients"

import { useStateValue } from './config/StateProvider'
import { auth } from './config/firebaseConfig'

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

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      authUser ? dispatch({ type: 'SET_USER', user: authUser }) : dispatch({ type: 'UNSET_USER' })
    })
  }, [dispatch])

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
                    <Route path="/patients">
                      <Patients />
                    </Route>
                    <Route exact path="/">
                      <Dashboard />
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