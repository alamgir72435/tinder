import React from "react";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import "./SwipeButtons.css";
import { IconButton } from "@material-ui/core";
const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon className="swipeButtons__repeat" />
      </IconButton>
      <IconButton>
        <CloseIcon className="swipeButtons__left" />
      </IconButton>
      <IconButton>
        <StarRateIcon className="swipeButtons__star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon className="swipeButtons__star" />
      </IconButton>
      <IconButton>
        <FlashOnIcon className="swipeButtons__left" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
