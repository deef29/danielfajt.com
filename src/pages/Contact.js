import React from "react";
// Components
import ContactPanel from "../components/ContactPanel/ContactPanel";
// Style
import "../styles/Contact.css";
import { FaTelegram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__left">
        <h1>Let's talk</h1>
      </div>
      <div className="contact__right">
        <ContactPanel
          icon={<AiOutlineMail />}
          contactText="daniel29se@gmail.com"
          buttonText="Text"
        />
        <ContactPanel
          icon={<HiPhone />}
          contactText="+1-858-247-8550"
          buttonText="Text"
        />
        <ContactPanel
          icon={<FaTelegram />}
          contactText="@danielfajt"
          buttonText="Text"
        />
      </div>
    </div>
  );
}

export default Contact;
