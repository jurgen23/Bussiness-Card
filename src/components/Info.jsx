import React from "react";

export default function Info() {
  return (
    <div>
      <img className="profilePicture" src="/images/picture.png" alt="" />
      <div className="infoText">
        <h1 className="name">Laura Smith</h1>
        <h3 className="tittle">Frontend Developer</h3>
        <h4 className="website">laurasmith.website</h4>
      </div>
      <div className="buttons">
        <a href="https://www.yahoo.com" target="_blank">
          <button className="emailButton" type="button">
            <img src="/images/mail.png" />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <button className="linkedinButton" type="button">
            <img src="/images/linkedin-icon.png" />
            Linkedin
          </button>
        </a>
      </div>
    </div>
  );
}
