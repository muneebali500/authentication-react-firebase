import { useState } from "react";

import Styles from "../styles/nav.module.scss";

import { Link } from "react-router-dom";

const {
  nav,
  logo,
  nav_items,
  nav_item,
  search_box,
  btn,
  login_btn,
  signup_btn,
  search_drop_btn,
  drop_down_wrapper,
  drop_icon,
} = Styles;

export default function Navbar() {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <nav className={nav}>
      <Link to="/">
        <h3 className={logo}>upwork</h3>
      </Link>
      <ul className={nav_items}>
        <li className={nav_item}>Find Talent</li>
        <li className={nav_item}>Find Work</li>
        <li className={nav_item}>Why Upwork</li>
        <li className={nav_item}>Enterprise</li>
      </ul>
      <form className={search_box}>
        <i className={`fas fa-search ${drop_icon}`}></i>
        <div
          className={search_drop_btn}
          onClick={() => setDropMenu(!dropMenu)}
        ></div>
        <input type="text" placeholder="Search" />
        {dropMenu && (
          <ul className={drop_down_wrapper}>
            <li>
              <i className="fas fa-child"></i>
              Talent <br />
              <span>Hire Professionals and Agencies</span>
            </li>
            <li>
              <i className="fab fa-bitbucket"></i>
              Projects <br />
              <span>Browse and buy projects</span>
            </li>
            <li>
              <i className="fas fa-archive"></i>
              Jobs <br />
              <span>Apply to jobs posted by clients</span>
            </li>
          </ul>
        )}
      </form>
      <div className="buttons">
        <Link to="/login">
          <button className={`${btn} ${login_btn}`}>Log In</button>
        </Link>
        <Link to="/signup">
          <button className={`${btn} ${signup_btn}`}>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}
