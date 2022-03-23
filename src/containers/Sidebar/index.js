import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {IoIosLogIn, IoIosLogOut} from "react-icons/io"
import Container from "./sidebar.style";
import logo from "../../assets/img/logo.png";
import routes from "../routes";

const urls = routes.private.filter(item => item.inHeader);
function Sidebar() {
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="links">
          {urls.map((url) => {
            const { path, title, icon } = url;
            return (
              <Link className="link" to={path} key={path}>
                <span className="link__icon">
                  {icon}
                </span>
                <p className="link__title">{title}</p>
              </Link>
            );
          })}
      </ul>
      <div className="auth__links">
        <Link className="link" to="/profile">
          <span className="link__icon">
            <CgProfile />
          </span>
          <p className="link__title">Profile</p>
        </Link>
        <Link className="link" to="/logout">
          <span className="link__icon">
            <IoIosLogOut />
          </span>
          <p className="link__title">Logout</p>
        </Link>
      </div>
    </Container>
  );
}

export default Sidebar;
