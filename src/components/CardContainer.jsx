import React from "react";

const CardContainer = ({ styles, isHeader, children }) => {
  return <div style={{ ...myStyle(isHeader), ...styles }}>{children}</div>;
};

const myStyle = (isHeader) => {
  return {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    textAlign: "center",
    color: "#212121",
    boxShadow: isHeader ? "0px 1px 4px #212121" : "0px -1px 4px #212121",
  };
};

export default CardContainer;
