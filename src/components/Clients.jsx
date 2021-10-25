import { clients, container, links, link } from "../styles/clients.module.scss";

export default function Clients() {
  return (
    <section className={clients}>
      <div className={container}>
        <h3>For Clients</h3>
        <h1>Find talent your way</h1>
        <p>
          Work with the largest network of independent professionals and get
          things done—from quick turnarounds to big transformations.
        </p>
        <div className={links}>
          <a href="/" className={link}>
            <span>
              Post a job <br /> and hire a Pro
            </span>
            <span>
              Talent Marketplace<sup>TM</sup> &rarr;
            </span>
          </a>
          <a href="/" className={link}>
            <span>
              Browse and <br /> buy projects
            </span>
            <span>
              Project Catalog<sup>TM</sup> &rarr;
            </span>
          </a>
          <a href="/" className={link}>
            <span>Let us help you find the right talent</span>
            <span>
              Talent Scout<sup>TM</sup> &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
