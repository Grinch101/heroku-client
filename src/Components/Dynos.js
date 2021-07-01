import { useState, useEffect } from "react";
import { getDynos } from "../API";
import Dyno from "./Dyno";

function Dynos({ match }) {
  const [filteredDynos, setFilteredDynos] = useState([]);

  useEffect(() => {
    const fetchAndFilterDynos = async function () {
      const allDynos = await getDynos();
      const filteredDynos = allDynos.filter(function (d) {
        if (d.type === match.url.slice(1)) {
          return d;
        }
        return "";
      });
    console.log(filteredDynos)

      setFilteredDynos(filteredDynos);
    };
    fetchAndFilterDynos();
  }, [match]);

  return (
    <div className="main">
      <h2>Formation Dynos: {match.url.slice(1)}</h2>
      { filteredDynos.length ===0 ? <h3 className='container'>ALL DYNOS ARE DOWN</h3>: ""}
      {      
      filteredDynos.map((dyno) => {
        return (
          <Dyno props={dyno} />

        );
      })}
    </div>
  );
}

export default Dynos;
