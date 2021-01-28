import { Drawer, List, ListItem } from "@material-ui/core";
import React from "react";

function SideDrawer(props) {
  const { open, onClose } = props;
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => console.log("Featured")}>
          Home
        </ListItem>
        <ListItem button onClick={() => console.log("Venue NFO")}>
          About the App
        </ListItem>
        <ListItem button onClick={() => console.log("BookShelf")}>
          My bookshelf
        </ListItem>
        <ListItem button onClick={() => console.log("Highlights")}>
          Contact
        </ListItem>
        <ListItem button onClick={() => console.log("Login")}>
          Login
        </ListItem>
        <ListItem button onClick={() => console.log("Signup")}>
          Sign Up 
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;