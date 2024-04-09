import React from "react";
import {  NavLink } from "react-router-dom";
import { useLoko } from "./Theme";

export default function Parameter({ onClick }) {
  const { theme, toogle } = useLoko();
  return (
    <div>
      <div
        className="navbar navbar-expand-lg"
        style={{
          height: "70px",
          justifyContent: "space-around",
          position: "sticky",
          top: "0",
          backgroundColor: theme === "sombre" ? "#666666" : "white",
          zIndex: "2",
          borderBottom: "dashed 0.5px",
        }}
      >
        <NavLink
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.3rem",
            textDecoration: "none",
            color: theme === "sombre" ? "white" : "#666666",
          }}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className="bg-primary  p-2 rounded-2 "
          style={{
            fontSize: "1.3rem",
            fontFamily: "sans-serif",
            textDecoration: "none",
            color:  "white"
          }}
          to={"/ajouter"}
        >
          <span className=" border border-dark rounded-circle p-1 bg-dark">
            +
          </span>
          Ajouter une nouvelle tache
        </NavLink>

        <NavLink
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.3rem",
            textDecoration: "none",
            color: theme === "sombre" ? "white" : "#666666",
          }}
          to={"/parameter"}
        >
          Paramétres
        </NavLink>
      </div>

      <div
        style={{
          height: "100vh",
          backgroundColor: theme === "sombre" ? "#1a1a1a" : "#ffffff",
        }}
      >
        <ol
          className="list-unstyled"
          style={{ color: theme === "sombre" ? "white" : "black" }}
        >
          <li className="  d-flex f-row" style={{ fontSize: "1.3rem" }}>
            Language
            <select
              name=""
              id=""
              className="form-control"
              style={{ transform: "translateX(20px)", width: "100px" }}
            >
              <optgroup>
                <option value="Malagasy">Malagasy</option>
                <option value="">anglais</option>
                <option value="">francais</option>
              </optgroup>
            </select>
          </li>

          <li style={{ fontSize: "1.3rem" }} className=" mt-3">
            Dark mode
            <button
              onClick={toogle}
              style={{ transform: "translateX(20px)" }}
              className="btn btn-light
            text-dark"
            >
              {theme === "sombre" ? "Dark" : "Light"}
            </button>{" "}
          </li>
        </ol>
      </div>
    </div>
  );
}
