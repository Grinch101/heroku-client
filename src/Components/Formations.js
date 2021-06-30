import React from "react";
import {
  getFormationList,
  getFormationInfo,
  singleFormationUpdate,
} from "../API";
import { useEffect, useState } from "react";
import Formation from "./Formation";
import Dynos from "./Dynos";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Formations() {
  const [formations, setFormations] = useState([]);

  const fetchAllFormation = async () => {
    let fml = await getFormationList();
    fml && setFormations(fml);
    return;
  };

  useEffect(() => {
    fetchAllFormation();
  }, []);

  const toggleFormationQuantity = async (id) => {
    console.log(id);
    const formationToToggle = await getFormationInfo(id);
    const updatedVals = {
      //   size : formationToToggle.size,
      quantity: formationToToggle.quantity === 1 ? 0 : 1,
    };
    const res = await singleFormationUpdate(updatedVals, id);

    setFormations(
      formations.map((formation) => {
        if (formation.id === id) {
          return { ...formation, quantity: updatedVals.quantity };
        } else {
          return formation;
        }
      })
    );
  };

  return (
    <div>
      {formations.map((f) => {
        return (
          <>
            <Formation
              props={f}
              toggleFormationQuantity={toggleFormationQuantity}
            />

            <Route path={`/${f.type}`} exact component={Dynos} />
          </>
        );
      })}
    </div>
  );
}

export default Formations;
