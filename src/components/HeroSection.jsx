import React from "react";

import {
  hero,
  hero_text_container,
  clients_wrapper,
  hero_img_container,
} from "../styles/hero.module.scss";

export default function HeroSection() {
  return (
    <div className={hero}>
      <div className={hero_text_container}>
        <h1>Join the world's work marketplace</h1>
        <p>Find great talent. Build your business.</p>{" "}
        <p>Take your career to the next level.</p>
        <button>Find Talent</button>
        <button>Find Work</button>
        <div className={clients_wrapper}>
          <h2>Trusted By</h2>
          <span>
            <i class="fab fa-microsoft"></i> Microsoft
          </span>
          <span>
            <i class="fab fa-airbnb"></i> Airbnb
          </span>
          <span>
            <i class="fab fa-amazon"></i> Amazon
          </span>
          <span>
            <i class="fab fa-apple"></i> Apple
          </span>
        </div>
      </div>
      <div className={hero_img_container}>
        <img
          src="https://www.upwork.com/static/assets/Brontes/67282aa/img/globe-mobile.04c98cc.jpg"
          alt="Global talent illustration"
        />
      </div>
    </div>
  );
}
