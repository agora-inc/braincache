import React, { CSSProperties } from "react";

const Card = (props: any) => {
  const card_styles: CSSProperties = {
    boxShadow: "0 2px 48px 0 rgb(0 0 0 / 8%)",
    background: "#fff",
    width: "100%",
    height: "100%",
    padding: 20,
    boxSizing: "border-box",
    borderRadius: 5,
  };

  return <div style={card_styles}>{props.children}</div>;
};

export default Card;
