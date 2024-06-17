const fetch = require("node-fetch");

const root = {
  user: async ({ id }) => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    return response.json();
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
    // Hier würden Sie die Logik implementieren, um einen neuen Benutzer zu erstellen.
  },
};

module.exports = root;
