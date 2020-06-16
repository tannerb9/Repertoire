const remoteURL = "http://localhost:5002";

export default {
  get(tab, id) {
    return fetch(`${remoteURL}/${tab}/${id}`).then((data) => data.json());
  },
  getWithObjs(tab, id, objs) {
    return fetch(`${remoteURL}/${tab}/${id}?_embed=${objs}`).then((data) =>
      data.json()
    );
  },
  getUsersRecipes(id) {
    return fetch(`${remoteURL}/users/${id}?_embed=recipes`).then((data) =>
      data.json()
    );
  },
  getByProp(tab, prop, val) {
    return fetch(`${remoteURL}/${tab}?${prop}=${val}`).then((data) =>
      data.json()
    );
  },
  post(tab, obj) {
    return fetch(`${remoteURL}/${tab}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((data) => data.json());
  },
};
