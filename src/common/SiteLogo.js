import React from "react";
import { useHistory } from "react-router";

export default function SiteLogo() {
  const { push } = useHistory();
  const goToHome = () => push("/home");
  return (
    <h1 className="main-heading" onClick={goToHome}>
      <span className="small">The</span>
      <span className="large">Siren</span>
    </h1>
  );
}
