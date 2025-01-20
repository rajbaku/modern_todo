import React from "react";
import "./Tag.css";

export const Tag = (props) => {
  return <button className="tag">{props.tagName}</button>;
};
