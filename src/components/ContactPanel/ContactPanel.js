import React from "react";
// Style
import "./ContactPanel.css";

function ContactPanel(props) {
  const { icon, contactText } = props;

  return (
    <div>
      <a href="www.seznam.cz" className="contactPanel">
        <div className="icon">{icon}</div>
        <div className="contactText">{contactText}</div>
      </a>
    </div>
  );
}

export default ContactPanel;
