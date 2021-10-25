import { footer, connect_us, copyright } from "../styles/footer.module.scss";
import { footerNav } from "../data";
import FooterNavItems from "./FooterNavItems";

export default function Footer() {
  return (
    <footer className={footer}>
      <nav>
        {footerNav.map((navItem) => (
          <FooterNavItems
            title={navItem.title}
            links={navItem.links}
            key={navItem.id}
          />
        ))}
      </nav>

      <section className={connect_us}>
        <ul className="follow-us">
          <li>Follow us</li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
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

      <div className={copyright}>
        <span>© 2015-2021 Upwork* Global Inc.</span>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Accessibility</span>
      </div>
    </footer>
  );
}
