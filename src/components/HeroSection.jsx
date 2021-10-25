////////////// import custom styling
import {
  hero,
  hero_text_container,
  clients_wrapper,
  hero_img_container,
} from "../styles/hero.module.scss";

/*-------------------------------------------- Start of Main Component --------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
export default function HeroSection() {
  return (
    <div className={hero}>
      <div className={hero_text_container}>
        {/*///////////////////////////////////////left side text section  */}
        <h1>Join the world's work marketplace</h1>
        <p>Find great talent. Build your business.</p>{" "}
        <p>Take your career to the next level.</p>
        <button>Find Talent</button>
        <button>Find Work</button>
        {/*////////////////////////////////// left side bottom client section  */}
        <div className={clients_wrapper}>
          <h2>Trusted By</h2>
          <span>
            <i className="fab fa-microsoft"></i> Microsoft
          </span>
          <span>
            <i className="fab fa-airbnb"></i> Airbnb
          </span>
          <span>
            <i className="fab fa-amazon"></i> Amazon
          </span>
          <span>
            <i className="fab fa-apple"></i> Apple
          </span>
        </div>
      </div>

      {/*////////////////////////////// Right Side - contains image only  */}
      <div className={hero_img_container}>
        <img
          src="https://www.upwork.com/static/assets/Brontes/67282aa/img/globe-mobile.04c98cc.jpg"
          alt="Global talent illustration"
        />
      </div>
    </div>
  );
}
