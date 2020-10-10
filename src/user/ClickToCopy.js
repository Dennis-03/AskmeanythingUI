import React from "react";

import "./ClickToCopy.scss";
import { Container } from "react-bootstrap";

export default function ClickToCopy({ link }) {
  const copyFunction = () => {
    var copyText = document.getElementById(link);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };
  return (
    <Container>
      <div className="click-container ">
        <div className="input-container ">
          <div className="neo-in inline">
            <input type="text" value={link} id={link} className="click-input" />
          </div>
          <button onClick={copyFunction} className="my-btn">
            Copy text
          </button>
        </div>
      </div>
    </Container>
  );
}
