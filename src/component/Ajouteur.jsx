import React, { useEffect } from "react";
import "./arg.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLoko } from "./Theme";
export function Ajout({ onAddtask }) {
  //les state neccesaire;
  let [scop, setscop] = useState("");
  const [timer, settimer] = useState("");
  const sary = [];
  const photo = ["png", "jpeg", "gif", "jpg"];
  const [ecrit, setecrit] = useState("");
  const [add, setadd] = useState([]);
  const { theme } = useLoko();

  //fonction pour ajouter une photo
  function addpicture(e) {
    let file = e.target.files;
    let filens = file.length,
      imgtype;
    for (let i = 0; i < filens; i++) {
      imgtype = file[i].name.split(".");
      imgtype = imgtype[imgtype.length - 1].toLowerCase();
      if (photo.indexOf(imgtype) !== -1) {
        form(file[i]);
      }
    }
  }

 


  function form(file) {
    let reader = new FileReader();

    reader.onload = function () {
      let element = this.result;

      sary.push(element);
      console.log(sary[0].src);
      setadd([...add, ...sary]);
    };
    reader.readAsDataURL(file);
  }

  //fonction pour ajouter le tache a notre fonction
  const Fun = () => {
    if (scop.trim().length === 0 || ecrit.trim().length === 0) {
      alert("les deux champs de titre et tache sont requis");
    }

    if (ecrit.trim().length === 0 || scop.trim().length === 0) return;
    onAddtask({
      title: scop,
      index: Date.now(),
      id: new Date().toLocaleTimeString(),
      text: ecrit,
      image: add,
      tim: timer,
    });

    setecrit(" ");
    setadd("");
    setscop("");
  };

  //fonction de mise en forme de l'input
  const Pixie = (e) => {
    setecrit(e.target.value);
  };

  //les composant a retourner
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
            color:   "white"
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
        className="d-flex "
        style={{
          height: "maxContent",
          paddingBottom: "50vh",
          flexDirection: "row",
          backgroundColor: theme === "sombre" ? "#666666" : "#f5f5f5",
        }}
      >
        {/* l'input de type texte */}

        <div className="container mt-5 shadow">
      <h3 className="text-info bg-secondary rounded-2 p-2" > Ajouter votre tache ici</h3>

          <input
            style={{
              backgroundColor: theme === "sombre" ? "#333" : "white",
              border: "none",
              color: theme === "sombre" ? "white" : "black",
            }}
            aria-required={true}
            type="text"
            id="love"
            onChange={(e) => setscop(e.target.value)}
            placeholder="Titre..."
            className="shadow-lg form-control mb-5 col-md"
            value={scop}
          ></input>

          <textarea
            onChange={Pixie}
            value={ecrit}
            id="teach"
            className=" shadow-lg  form-control"
            style={{
              borderTop: "none",
              backgroundColor: theme === "sombre" ? "#333" : "white",
              border: "none",
              color: theme === "sombre" ? "white" : "black",

              height: 100,
              width: "430px",
              fontSize: "1.3rem",
            }}
            type="text"
            placeholder="Ajouter une tache..."
          ></textarea>

          <button
            onClick={Fun}
            className="btn btn-outline-info "
            style={{
              padding: 0,
              width: 200,
              height: "140px",
              fontSize: "3rem",
              fontFamily: "arial",
              position: "realtive",
              marginTop: "100px",
            }}
          >
            Ajouter
          </button>
        </div>

        <div className="container d-flex" style={{ flexDirection: "column" }}>
          <label
            style={{
              width: "max-content",
              height: "max-content",
              padding: "",
              color: "white",
              backgroundColor: "black",
              marginLeft: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1pw solid grey",
              borderRadius: "70px",
              fontSize: "5rem",
            }}
            for="file-upload"
          >
            +
          </label>
          <h3 style={{fontSize:"1.3rem"}} className="text-info ms-5 mt-3">IMAGE</h3>
          <input
            type="file"
            id="file-upload"
            multiple
            className="form-control"
            onChange={addpicture}
            style={{ display: "none" }}
          />
          <ul className="">
            {add &&
              add.map((item, index) => (
                <img key={index} src={item} alt="king"></img>
              ))}
          </ul>
          <div className="" style={{ display: "block" }}>
            <h2>heure d'execution de la tache</h2>
            <input
              type="time"
              onChange={(e) => settimer(e.target.value)}
              style={{
                backgroundColor: theme === "sombre" ? "#333" : "white",
                width: "200px",
                color: theme === "sombre" ? "white" : "black",
              }}
              value={timer}
              className="form-control mt-3 shadow"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
