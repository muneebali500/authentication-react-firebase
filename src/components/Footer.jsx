import { footer } from "../styles/footer.module.scss";
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
    </footer>
  );
}
