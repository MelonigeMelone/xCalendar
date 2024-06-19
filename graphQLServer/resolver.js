const fetch = require("node-fetch");

const root = {
  user: async ({ name }) => {
    const response = await fetch(
      `http://localhost:3000/users?name=${encodeURIComponent(name)}`,
    );
    const users = await response.json();
    return users[0]; // Nimmt das erste Element aus dem Array der Benutzer, die zurückgegeben werden
  },

  createUser: async ({ id, email, name, password }) => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, email, name, password }),
    });
    return response.json();
    // Logik implementieren, um einen neuen Benutzer zu erstellen.
  },
};

module.exports = root;
