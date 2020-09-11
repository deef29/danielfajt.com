import React from "react";
// Style
import "./ContactPanel.css";

function ContactPanel(props) {
  const { icon, contactText, url } = props;

  return (
    <div>
      <a
        href={url}
        target="_blank"
        className={url ? "contactPanel url" : "contactPanel"}
        rel="noopener noreferrer"
      >
        <div className="icon">{icon}</div>
        <div className="contactText">{contactText}</div>
      </a>
    </div>
  );
}

export default ContactPanel;
