import React from "react";
import "./Header.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
const Header = () => {

  
  return (
    <div className="header">
      <IconButton>
        <PermIdentityIcon className="header_icon" />
      </IconButton>
      <img
        alt=""
        className="header__logo"
        src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
      />
      <IconButton>
        <ForumIcon className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;
