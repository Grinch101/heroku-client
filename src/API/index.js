// here we make request to api


const BASE_URL = "http://localhost:3000/D";

export async function Q(endpoint, option = {}) {
  const response = await fetch(BASE_URL + endpoint, option);
  return await response.json();
}

export async function getFormationList() {
  return await Q(`/formation/list`);
}

// export async function getFormationList() {
//   return (await Q("/")).formations;
// }

export async function getFormationInfo(formation_id) {
  return await Q(`/formation/${formation_id}`);
}

export async function batchFormationUpdate(updates) {
  let option = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updates),
  };
  return await Q(`/formation`, option);
}

export async function singleFormationUpdate(updates, formation_id) {
  let option = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    // body: JSON.stringify(updates),
    body: updates
  };
  console.log(JSON.stringify(option))
  return await Q(`/formation/${formation_id}`, option);
}

export async function getDynos() {
  return await Q(`/dynos/list`);
}

// export async function getDynos() {
//   return (await Q(`/`)).dynos;
// }


export async function getDynoInfo(id) {
  return await Q(`dynos/${id}`);
}

export async function getDynoSizes() {
  return await Q(`/dyno-sizes`);
}

export async function stopDyno(id) {
  return await Q(`/dynos/stop/${id}`);
}

export async function restartAllDynos() {
  return await Q(`/dynos/restart/all`);
}
