// debut de l'importation

import React, { useState } from "react";

import "./App.css";
import "./monage/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Theme from "./component/Theme";
import Recherche from "./component/recherche";
import { Ajout } from "./component/Ajouteur";
import Parameter from "./component/parameter";
import Modifier from "./component/Modifier";
//finde l'importation

function App() {
  const [tache, settache] = useState([]);
  const handeladdtask = (newTache) => {
    settache([...tache, newTache]);
  };

  const Routage = createBrowserRouter([
    {
      path: "/",
      element: <Recherche task={tache} />,
    },
    {
      path: "/ajouter",
      element: <Ajout onAddtask={handeladdtask}></Ajout>,
    },
    {
      path: "/parameter",
      element: <Parameter />,
    },
    {
      path:"/modifier/:id",
      element:<Modifier start={tache}/>
    }
  ]);

  return (
    <Theme>
      <RouterProvider router={Routage}></RouterProvider>
    </Theme>
  );
}
export default App;
