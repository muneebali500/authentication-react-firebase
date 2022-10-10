import React from "react";

import { deactivate } from "../styles/deactivate.module.scss";

export default function Deactivate() {
  return (
    <section className={deactivate}>
      <p>Your Account has been deactivated</p>
      <p>
        But Why??{" "}
        <span role="img" aria-label="Sad Face">
          😞
        </span>{" "}
      </p>
    </section>
  );
}
