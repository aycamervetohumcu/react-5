import React from "react";
import pic1 from "../assets/pic1.svg";

function NavBar() {
    return (
        <div className="navigation">
      <div>
        <span className="logo">Seker</span>
      </div>
      <ul>
        <li>
          <a href="">Images</a>
        </li>
        <li>
          <a href="">Videos</a>
        </li>
        <li>
          <a href="">Maps</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
      </ul>
      <div>
        <a className="signIn">
          Sign in
          <img className="arrowIcon" src={pic1} alt="Arrow Icon" />
        </a>
      </div>
    </div>
  );
}

