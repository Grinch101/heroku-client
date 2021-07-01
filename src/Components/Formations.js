import React from "react";
import {
  getFormationList,
  getFormationInfo,
  singleFormationUpdate,
} from "../API";
import { useEffect, useState } from "react";
import Formation from "./Formation";
import Dynos from "./Dynos";
import { Route  } from "react-router-dom";

function Formations() {
  const [formations, setFormations] = useState([]);



  useEffect(() => {
    const fetchAllFormation = async () => {
      let fml = await getFormationList();
      fml && setFormations(fml);
      return;
    };
    fetchAllFormation();
  }, []);

  const toggleFormationQuantity = async (id) => {
    console.log(id);
    const formationToToggle = await getFormationInfo(id);
    const updatedVals = {
      //   size : formationToToggle.size,
      quantity: formationToToggle.quantity === 1 ? 0 : 1,
    };
    await singleFormationUpdate(updatedVals, id);
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
    <>
      {formations.map((f, index) => {
        return (
          <>
            <Route
              path="/"
              exact
              render={(props) => (
                <Formation
                  key={index}
                  props={f}
                  onClick={toggleFormationQuantity}
                />
              )}
            />

            {/* <Route
                path={`/${f.type}`}
                exact
                render={(props) => (
                  <Dynos
                  key={f.id}
                    props={f}
                  />
                )}
              /> 
   */}

            <Route key={index} path={`/${f.type}`} exact component={Dynos} />
          </>
        );
      })}
    </>
  );
}

export default Formations;
