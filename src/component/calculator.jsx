import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Page() {
  const [Num, setnum] = useState(" ");
  let [send, setsend] = useState([]);
  let code = [
    "103",
    "104",
    "105",
    "111",
    "8",
    "101",
    "102",
    "106",
    "53",
    "97",
    "110",
    "98",
    "99",
    "109",
    "92",
    "96",
    "88",
    "107",
    "13",
    "100",
  ];
  window.addEventListener("error", (err) => {
    console.error(err);
  });
  function set(e) {
    adder(e.target);
  }
  window.addEventListener("keydown", (e) => {
    calcul(e);
  });

  function adder(valeur) {
    if (code.includes(valeur.dataset.key)) {
      switch (valeur.dataset.key) {
        case "13":
          setnum(eval(Num));
          setsend([...send, Num]);
          break;
        case "8":
          setnum("");
          break;
        case "88":
          let run = Num.substring(0, Num.length - 1);
          setnum(run);
          break;
        default:
          let piece = valeur.textContent;
          setnum(Num + piece);
      }
    }
  }
  function calcul(valeur) {
    if (code.includes(valeur.keyCode.toString())) {
      switch (valeur.keyCode.toString()) {
        case "13":
          let val = eval(Num);
          setnum(val);
          setsend([...send, Num]);

          break;

        case "8":
          setnum("");
          break;
        case "88":
          let run = Num.substring(0, Num.length - 1);
          setnum(run);
          break;

        default:
          let bin = valeur.key.toString();
          setnum(Num + bin);
          break;
      }
    }
  }

  return (
    <div className="ecout">
      <div className="params">
        <div>
          <NavLink className="historique" to={"/"}>
            Home
          </NavLink>
        </div>
      </div>
      <div className="cadre">
        <div className="ecran">{Num}</div>
        <div className="touche">
          <div onClick={set} className="but" data-key="103">
            7
          </div>
          <div onClick={set} className="but" data-key="104">
            8
          </div>
          <div onClick={set} className="but" data-key="105">
            9
          </div>
          <div onClick={set} className="but" data-key="111">
            /
          </div>
          <div onClick={set} className="but one" data-key="8">
            AC
          </div>
          <div onClick={set} className="but" data-key="100">
            4
          </div>
          <div onClick={set} className="but" data-key="101">
            5
          </div>
          <div onClick={set} className="but" data-key="102">
            6
          </div>
          <div onClick={set} className="but " data-key="106">
            *
          </div>
          <div onClick={set} className="but " data-key="53">
            (
          </div>
          <div onClick={set} className="but" data-key="97">
            1
          </div>
          <div onClick={set} className="but" data-key="98">
            2
          </div>
          <div onClick={set} className="but" data-key="99">
            3
          </div>
          <div onClick={set} className="but " data-key="109">
            -
          </div>
          <div onClick={set} className="but" data-key="92">
            %
          </div>
          <div onClick={set} className="but" data-key="96">
            0
          </div>
          <div onClick={set} className="but two" data-key="88">
            x
          </div>
          <div onClick={set} className="but " data-key="107">
            +
          </div>
          <div onClick={set} className="but " data-key="110">
            .
          </div>
          <div onClick={set} className="but two" data-key="13">
            =
          </div>
        </div>
      </div>
    </div>
  );
}
