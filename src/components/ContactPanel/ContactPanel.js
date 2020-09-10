import React from "react";
// Style
import "./ContactPanel.css";

function ContactPanel(props) {
  const { icon, contactText } = props;

  return (
    <div className="contactPanel">
      <div className="icon">{icon}</div>
      <div className="contactText">{contactText}</div>
    </div>
  );
}

export default ContactPanel;
