import React from "react";

const PhotoProfile = ({ stylesContainer, resources }) => {
  return (
    <div style={{ ...stylesContainer }}>
      <img style={{ ...myStyle.container }} src={resources.image} alt="logo" />
    </div>
  );
};

const myStyle = {
  container: {
    width: "140px",
    height: "140px",
    border: "1px solid #00e676",
    borderRadius: "50%",
    overflow: "hidden",
    objectFit: "cover",
    boxShadow: "0px 0px 8px #00e676",
    backgroundColor: "#00e676",
  },
};

export default PhotoProfile;
