import React, { Component } from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
  summer: {
    text: "Tous à la plage !",
    icon: 'fa-sun',
    color: 'has-text-warning'
  },
  winter: {
    text: "Il fait froid mon canard !",
    icon: 'fa-snowflake',
    color: 'has-text-info'
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export const SeasonDisplay = ({ latitude, month }) => {
  const season = getSeason(latitude, month);
  const { text, icon, color } = SeasonConfig[season];

  return (
    <div className={`seasonContainer ${season}`}>
      <span className={`icon-left is-large ${color}`}>
        <i className={`fas fa-3x ${icon}`}></i>
      </span>
      <h1 className={`title title-size ${season}`}>{text}</h1>
      <span className={`icon-right is-large ${color} `}>
        <i className={`fas fa-3x ${icon}`}></i>
      </span>
    </div>
  );
};
