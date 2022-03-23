import React from "react";
import { Link, NavLink } from "react-router-dom";
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
              <NavLink className={(nav) => (nav.isActive ? 'link link--active': 'link')} to={path} key={path}>
                <span className="link__icon">
                  {icon}
                </span>
                <p className="link__title">{title}</p>
              </NavLink>
            );
          })}
      </ul>
      <div className="auth__links">
        <NavLink  className={(nav) => (nav.isActive ? 'link link--active': 'link')} to="/profile">
          <span className="link__icon">
            <CgProfile />
          </span>
          <p className="link__title">Profile</p>
        </NavLink>
        <p className="link" >
          <span className="link__icon">
            <IoIosLogOut />
          </span>
          <p className="link__title">Logout</p>
        </p>
      </div>
    </Container>
  );
}

export default Sidebar;