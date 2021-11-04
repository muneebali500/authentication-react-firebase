<<<<<<< HEAD
import styled from "styled-components";

export default function Footer() {
  return (
    <Para>
      🙂 The Project is developed by Muneeb Ali to showcase his React.js skills
      🙂
    </Para>
  );
}

const Para = styled.footer`
  font-size: 1.5rem;
  color: #fff;
  background-color: #0236b9;
  padding: 1.5rem;
  text-align: center;
`;
=======
import {
  footer,
  footer_nav,
  connect_us,
  copyright,
} from "../styles/footer.module.scss";

import { footerNav, footerSocialLinks } from "../data";
import FooterNavItems from "./FooterNavItems";

export default function Footer() {
  return (
    <footer className={footer}>
      {/*//////////////////////// Footer Nav Items */}
      <nav className={footer_nav}>
        {footerNav.map((navItem) => (
          <FooterNavItems
            title={navItem.title}
            links={navItem.links}
            key={navItem.id}
          />
        ))}
      </nav>

      {/*//////////////////////// Footer Socail Links */}
      <section className={connect_us}>
        <ul className="follow-us">
          <li>Follow us</li>
          <li>
            {footerSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.website}
                target="_blank"
                rel="noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </li>
        </ul>

        <ul className="mobile-app">
          <li>Mobile App</li>
          <li>
            <a href="https://www.apple.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-apple"></i>
            </a>
            <a href="https://www.android.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-android"></i>
            </a>
          </li>
        </ul>
      </section>

      {/*//////////////////////// Footer Copyright */}
      <div className={copyright}>
        <span>© 2015-2021 Upwork* Global Inc.</span>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Accessibility</span>
      </div>
    </footer>
  );
}
>>>>>>> 41577c89619ab4544bafbfe2f5ebca78ac943c4a
