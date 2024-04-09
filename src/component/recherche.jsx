import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLoko } from "./Theme";
import "./arg.css";

function Recherche({ task }) {
  const [moon, setmoon] = useState(task);
  const { theme } = useLoko();
  let [afficher, setafficher] = useState([]);
  const [tady, settady] = useState(" ");
  let [count, setcount] = useState(2);
  const [bike, setbike] = useState();
  const del = "X";

  const bof = [];

  function orm(e) {
    let run = moon.splice(e, 1);
    setmoon(run);
  }

  function binder(item) {
    setbike(item);
  }
  const reche = (e) => {
    settady(e.target.value);
    setcount(tady.length + 1);

    moon.map((item) => {
      if (
        item.title.trim().substring(0, count) ===
        tady.trim().substring(0, count)
      ) {
        bof.push(item);
        setafficher(bof);
      }
    });
    console.log(bike);
  };

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
          borderBottom: "dashed 0.5px",
          zIndex: "2",
        }}
      >
        <NavLink
          style={{
            fontSize: "1.3rem",
            fontFamily: "sans-serif",
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
            color: "white",
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
            fontSize: "1.3rem",
            fontFamily: "sans-serif",
            textDecoration: "none",
            color: theme === "sombre" ? "white" : "#666666",
          }}
          to={"/parameter"}
        >
          Paramétres
        </NavLink>
      </div>
      <div
        className="text-dark"
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          height: "100vh",
        }}
      >
        <div
          className="d-flex  shadow "
          style={{
            flexDirection: "column",
            width: "500px",
            height: "200vh",
            backgroundColor: theme === "sombre" ? "#333" : "#f5f5f5",
          }}
        >
          <input
            type="search"
            placeholder="Recherche..."
            value={tady}
            onInput={reche}
            className="m-0 rounded-3 shadow"
            style={{
              border: "none",
              color: theme === "sombre" ? "#e0e0e0" : "#666666",
              backgroundColor: theme === "sombre" ? "#1a1a1a" : "#ffffff",
              left: "20px",
              height: "40px",
              width: "300px",
              position: "sticky",
              top: "30px",
            }}
          ></input>

          <ul className="text-light mt-5 list-unstyled">
            {tady.trim().length !== 0
              ? afficher.map((item, index) => (
                  <li
                    id="li"
                    onClick={() => binder(item)}
                    draggable="false"
                    key={item.id}
                    className="bg-secondary p-3 m-2  rounded-3"
                    style={{
                      width: "90%",
                      justifyContent: "space-between",
                      display: "flex",
                      cursor: "pointer",
                      fontFamily: "sans-serif",
                      fontSize: "1.3rem",
                    }}
                  >
                    {item.title} <span>{item.id}</span>
                    <span
                      key={item.index}
                      onClick={() => orm(item.index)}
                      style={{
                        transform: "rotateX(60deg)",
                        fontSize: "1.3rem",
                      }}
                    >
                      {del}
                    </span>
                  </li>
                ))
              : moon.map((item) => (
                  <li
                    id="li"
                    onClick={() => binder(item)}
                    draggable="false"
                    key={item.index}
                    className="  p-3 m-2  rounded-3 "
                    style={{
                      backgroundColor:
                        theme === "sombre" ? "#666666" : "#ffffff",
                      display: "flex",
                      color: theme === "sombre" ? "white" : "#666666",
                      width: "90%",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      fontFamily: "sans-serif",
                      fontSize: "1.3rem",
                    }}
                  >
                    {item.title}
                    <span>{item.id}</span>

                    <span
                      key={item.index}
                      onClick={() => orm(item.index)}
                      style={{
                        transform: "rotateX(60deg)",
                        fontSize: "1.2rem",
                      }}
                    >
                      {del}
                    </span>
                  </li>
                ))}
          </ul>
        </div>

        <div
          className=" container rounded-5 px-5 shadow "
          style={{
            position: "sticky",
            top: 0,
            bottom: "0",
            backgroundColor: theme === "sombre" ? "#333333" : "#ffffff",
            color: theme === "sombre" ? "#e0e0e0" : "#333333",
          }}
        >
          <h1
            className="mt-5 ms-5 text-info"
            style={{ transform: "translate(250px)", fontSize: "5rem" }}
          >
            TO DO LIST
          </h1>
          <h2
            className="container"
            style={{
              paddingLeft: "300px",
              fontFamily: "cursive",
              textDecoration: "underline",
            }}
          >
            description de la tache
          </h2>
          {moon.length !== 0 ? (
            bike && (
              <div
                className="container d-flex mt-5"
                style={{ flexDirection: "column" }}
              >
                <div className="row">
                  {bike.image && (
                    <div
                      className="col shadow-lg me-3 rounded-3 "
                      style={{
                        backgroundColor:
                          theme === "sombre" ? "#333333" : "#fffff",
                      }}
                    >
                      <h5>Image de la tache:</h5>

                      <img
                        style={{ height: "170px" }}
                        src={bike.image}
                        alt=""
                      ></img>
                    </div>
                  )}

                  <div
                    className="col  shadow-lg me-3 rounded-3"
                    style={{
                      fontFamily: "unset",
                      backgroundColor:
                        theme === "sombre" ? "#333333" : "#ffffff",
                    }}
                  >
                    <h5>tache a faire:</h5>
                    {bike.text}
                  </div>
                  <div
                    className="col  shadow-lg me-3 rounded-3"
                    style={{
                      fontFamily: "unset",
                      backgroundColor:
                        theme === "sombre" ? "#333333" : "#ffffff",
                    }}
                  >
                    <h5>heure d'execution:</h5>
                    {bike.tim}
                  </div>
                </div>
                <NavLink
                  to={`modifier/${this}`}
                  style={{
                    top: "0",
                    width: "100px",
                    position: "relative",
                    fontSize: "3rem",
                    fontWeight:"900",
                    textDecoration:"none",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column",
                    margin:"0",
                    padding:"8px"
                  }}
                  className="bg-info rounded-5 mt-5   text-dark "
                >
                 <p style={{transform:"translateY(40px)",fontSize:"1.3rem"}}>MODIFIER</p>
                  +
                </NavLink>
              </div>
            )
          ) : (
            <h2></h2>
          )}
        </div>
      </div>
    </div>
  );
}
export default Recherche;
