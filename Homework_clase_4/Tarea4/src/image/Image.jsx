import React from "react";

function Image({ url }) {
  return <img src={url} alt="Character" style={{ borderRadius: "8px", maxWidth: "100%" }} />;
}

export default Image;
