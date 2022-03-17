import React from "react";

const LinkProfile = ({
  index,
  text,
  url,
  isHover,
  onMouseOver,
  onMouseLeave,
}) => {
  const linkStyle = () => {
    return { ...myStyle.link, ...(isHover && myStyle.linkOnHover) };
  };

  return (
    <a
      style={{ ...linkStyle() }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={() => onMouseOver(index)}
      onMouseLeave={() => onMouseLeave(index)}
    >
      {text}
    </a>
  );
};

const myStyle = {
  link: {
    margin: "0px 8px",
    width: "90px",
    backgroundColor: "#00e676",
    padding: "4px 10px",
    textDecoration: "none",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontWeight: "normal",
  },
  linkOnHover: {
    backgroundColor: "#FFFFFF",
    color: "#00e676",
    boxShadow: "0px 0px 4px #00e676",
    fontWeight: "bold",
  },
};

export default LinkProfile;
