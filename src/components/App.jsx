import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import useStyles from "./styles";
import {
  ActorsDetail,
  MovieDetail,
  Movies,
  Nav,
  ProfileDetail,
  MovieInformation
} from "./index.js";

function App() {
  // calling styles hook from styles file
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id" component={MovieInformation} />
          <Route exact path="/actors/:id" component={ActorsDetail} />
          <Route exact path={["/", "/approved"]} component={Movies} />

          <Route exact path="/profile/:id" component={ProfileDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

// import MovieDetail from "./MovieDetail/MovieDetail";
// import ActorsDetail from "./ActorsDetail/ActorsDetail";
// import ProfileDetail from "./ProfileDetail/ProfileDetail";
// import Movies from "./Movies/Movies";
// import Nav from "./Nav/Nav";
