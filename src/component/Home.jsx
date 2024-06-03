import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="screen">
      <h1>welcome to my calculator 🧒👦</h1>
      <NavLink className="menu" to={"/calculator"}>
        Ouvrir la calculatrice
      </NavLink>
    </div>
  );
}
