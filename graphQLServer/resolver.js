// const users = [
//   {
//     id: "1",
//     name: "johne_doe",
//     email: "jdoe@mail.com",
//     password: "pass1234",
//   },
//   {
//     id: "2",
//     name: "d_abert",
//     email: "d_bohr@mail.com",
//     password: "pass1234",
//   },
//   {
//     id: "3",
//     name: "d.bohr",
//     email: "d.bohr@mail.com",
//     password: "pass1234",
//   },
//   {
//     id: "4",
//     name: "tobias_eberle.123",
//     email: "tobias_eberle@mail.com",
//     password: "pass1234",
//   },
//   {
//     id: "5",
//     name: "paul.aner_kuhn",
//     email: "p.kuhn@mail.com",
//     password: "pass1234",
//   },
// ];

// const root = {
//   Query: {
//     user(args) {
//       return users.find((user) => user.id === args.id);
//     },
//   },
// };

const fetch = require("node-fetch");

const root = {
  user: async ({ name }) => {
    const response = await fetch(
      `http://localhost:3000/users?name=${encodeURIComponent(name)}`,
    );
    const users = await response.json();
    return users[0]; // Nimmt das erste Element aus dem Array der Benutzer, die zurückgegeben werden
  },
  // user: async ({ name }) => {
  //   const response = await fetch(`http://localhost:3000/users/${name}`);
  //   return response.json();
  // },
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

// const fetch = require("node-fetch");

// const resolver = {
//   Query: {
//     user: async (parent, args) => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/users?email=${encodeURIComponent(args.email)}`,
//         );
//         if (!response.ok) {
//           throw new Error("Netzwerkantwort war nicht ok.");
//         }
//         const users = await response.json();
//         return users[0]; // Da die Antwort ein Array sein könnte, nehmen wir das erste Element
//       } catch (error) {
//         console.error("Fehler beim Abrufen des Benutzers:", error);
//         // Fehlerbehandlung hier
//       }
//     },
//   },
// };

module.exports = root;
