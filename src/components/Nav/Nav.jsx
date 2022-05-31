import React, { Fragment, useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  LightMode,
  DarkModeSharp
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyles from "./styles";
import { Sidebar, Search } from "../index.js";

const Nav = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  // window.innerWidth < 600;
  const isAuth = true;

  const [isOpen, setIsOpen] = useState(false);
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
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <DarkModeSharp /> : <LightMode />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuth ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={() => {}}
                component={Link}
                to="{`/profile/:id`}"
                className={classes.linkButton}
              >
                {!isMobile && <Fragment>My Movies &nbsp;</Fragment>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="user profile"
                  src="https://s.yimg.com/ny/api/res/1.2/qp.vNxAB9lrteT7UI0gdpQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/03jG2w9_lVlYV6gz84KzIQ--~B/aD0wO3c9MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/business_insider_articles_888/1b2fbb106068b73858a38345f91ac026"
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
              modalProps={{ keepMounted: true }}
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
