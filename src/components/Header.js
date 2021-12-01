import React from "react";

import imgLogo from "./../img/logo.png";

export const Header = () => {
  return (
    <div className="header-wrap">
      <a>
        <img src={imgLogo} alt="accounting" />
      </a>

      <div className="menu">
        <ul>
          <li>
            <a>Login</a>
          </li>
          {/* <li>Register</li> */}
        </ul>
      </div>
    </div>
  );
};
