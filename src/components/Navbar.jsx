import { useState } from "react";
import { Link } from "react-router-dom";

//////////////////// import custom styles
import {
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
  search_icon,
  nav_btn_close,
  nav_btn_open,
} from "../styles/nav.module.scss";

export default function Navbar({ loggedIn }) {
  const [dropMenu, setDropMenu] = useState(false);

  ////// creating state for large screen  i.e; >= 1200px
  const [searchBox, setSearchBox] = useState(true);

  ///// set state to show items and hide items on medium and small screens i.e; screen <= 900
  const [showNav, setShowNav] = useState(false);

  /*-------------------------------------------- Start of Main Component --------------------------------------------*/
  /*-----------------------------------------------------------------------------------------------------------------*/
  return (
    <nav className={nav}>
      {/*--------- Navbar button for large & small screens ---------  */}
      <i
        className={`fas fa-bars ${nav_btn_open}`}
        onClick={() => setShowNav(true)}
      ></i>

      {/* --------------- logo ------------------ */}
      <Link to="/">
        <h3 className={logo}>upwork</h3>
      </Link>

      {/*------------- NavItems appear and disappear according to window width and state ----------------*/}
      {(window.innerWidth >= 900 || showNav) && (
        <ul className={nav_items}>
          <i
            className={`fas fa-times ${nav_btn_close}`}
            onClick={() => setShowNav(false)}
          ></i>
          <li className={nav_item}>Find Talent</li>
          <li className={nav_item}>Find Work</li>
          <li className={nav_item}>Why Upwork</li>
          <li className={nav_item}>Enterprise</li>
        </ul>
      )}

      {/*---------------------- search icon appears on large screen i.e; screen >= 1200px  */}
      <i
        className={`fas fa-search ${search_icon}`}
        onClick={() => setSearchBox(!searchBox)}
      ></i>

      {/*------------- Search box appear and disappear according to window width and state ----------------*/}
      {(window.innerWidth >= 1200 || !searchBox) && (
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
      )}

      {/*-------- DOM displays sing up and log in buttons and if the user is logged in, dashbooard button appears -------  */}
      {!loggedIn ? (
        <div className="buttons">
          <Link to="/login">
            <button className={`${btn} ${login_btn}`}>Log In</button>
          </Link>
          <Link to="/signup">
            <button className={`${btn} ${signup_btn}`}>Sign Up</button>
          </Link>
        </div>
      ) : (
        <Link to="/dashboard">
          <button className={`${btn} ${signup_btn}`}>Dashboard</button>
        </Link>
      )}
    </nav>
  );
}
