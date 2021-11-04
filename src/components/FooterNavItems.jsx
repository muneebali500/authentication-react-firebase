import { useState } from "react";

import {
  nav_btn,
  nav_btn_rotate,
  nav_items,
} from "../styles/footer.module.scss";

export default function FooterNavItems({ title, links }) {
  const [footerNavLinks, setfooterNavLinks] = useState(false);

  return (
    <div className={nav_items}>
      <h3>
        {title}{" "}
        <button
          onClick={() => setfooterNavLinks(!footerNavLinks)}
          className={`${nav_btn} ${footerNavLinks ? nav_btn_rotate : null}`}
        >
          &or;
        </button>
      </h3>

      {/*/////////// the footer nav items shall display if window width >= '768px' on large screens OR if the user cliked on footer nav button on small screens */}
      {(window.innerWidth >= 768 || footerNavLinks) && (
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href="/">{link}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
