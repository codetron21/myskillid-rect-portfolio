import React from "react";
import Spacer from "./Spacer";

const ItemProject = ({ title, description, image, type }) => {
  return (
    <div style={myStyle.container}>
      <img style={myStyle.image} src={image} alt="pic" />
      <div style={myStyle.textContainer}>
        <h4>{title}</h4>
        <Spacer height={"4px"} />
        <p>{description}</p>
      </div>
      <div style={myStyle.badge(type)}>
        <p style={{ color: "#FFFFFF" }}>{type}</p>
      </div>
    </div>
  );
};

const myStyle = {
  badge: (type) => {
    return {
      width: "30px",
      height: "30px",
      backgroundColor: type === "BE" ? "#FE6584" : "#00e676",
      boxShadow: "0px 0px 4px #212121",
      fontWeight: "bold",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "10px",
      right: "10px",
    };
  },
  image: {
    width: "200px",
    height: "240px",
    objectFit: "cover",
    objectPosition: "0 0",
    boxShadow: "0px 1px 1px #00e676",
  },
  container: {
    backgroundColor: "#FFFFFF",
    width: "200px",
    boxShadow: "0px 0px 4px #00e676",
    overflow: "hidden",
    textAlign: "center",
    borderRadius: "16px",
    margin: "16px",
    position: "relative",
  },
  textContainer: {
    padding: "10px 10px 20px",
  },
};

export default ItemProject;
