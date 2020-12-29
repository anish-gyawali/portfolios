import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const userRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (userRef.current && userRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className="header">
      <div className="header_button">
        <Button
          ref={userRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Hamburger rounded />
        </Button>
      </div>
      <Popper
        open={open}
        anchorEl={userRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/">Resume </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/">Contact</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/">Projects</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/">About</Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <div id="nav-bar" className="header_options">
        <Link to="/" >Resume </Link>
      </div>
      <div id="nav-bar" className="header_options">
        <Link to="/">Contact</Link>
      </div>
      <div id="nav-bar" className="header_options">
        <Link to="/">Projects</Link>
      </div>
      <div id="nav-bar" className="header_options">
        <Link to="/">About</Link>
      </div>
    </div>
  );
}
export default Header;
