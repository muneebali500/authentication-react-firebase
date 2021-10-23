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
      <ul>
        {links.map((link, index) => {
          return (
            footerNavLinks && (
              <li key={index}>
                <a href="/">{link}</a>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
