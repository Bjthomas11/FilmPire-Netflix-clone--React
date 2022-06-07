import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery
} from "@mui/material";
import { Menu, AccountCircle, LightMode, DarkMode } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyles from "./styles";
import { Sidebar, Search } from "../index.js";
import { fetchToken, moviesApi, createSessionId } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/authSlice";
import { ColorModeContext } from "../../utils/ToggleColorMode";

const Nav = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  // window.innerWidth < 600;
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector(userSelector);

  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("token");
  const session_id = localStorage.getItem("session_id");
  const mode = useContext(ColorModeContext);

  useEffect(() => {
    const loggedInUser = async () => {
      if (token) {
        if (session_id) {
          const { data } = await moviesApi.get(
            `/account?session_id=${session_id}`
          );
          // console.log(data);
          dispatch(setUser(data));
        } else {
          const newSessionId = await createSessionId();
          const { data } = await moviesApi.get(
            `/account?session_id=${newSessionId}`
          );
          dispatch(setUser(data));
        }
      }
    };
    loggedInUser();
  }, [dispatch, session_id, token]);

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setIsOpen((prevState) => !prevState)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={mode.toggleMode}>
            {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuth ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={() => {}}
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
              >
                {!isMobile && <Fragment>{user.name} &nbsp;</Fragment>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="user profile"
                  src={`https://image.tmdb.org/t/p/w500${user.avatar.tmdb.avatar_path}`}
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={isOpen}
              onClose={() => setIsOpen((prevState) => !prevState)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setIsOpen={setIsOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setIsOpen={setIsOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </Fragment>
  );
};

export default Nav;
