const { exec } = require("child_process");

exec("json-server --watch data.json --port 3000", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`JSON Server stdout: ${stdout}`);
  console.error(`JSON Server stderr: ${stderr}`);
});

console.log("JSON Server is running on http://localhost:3000...");

exec("nodemon index.js", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`GraphQL Server stdout: ${stdout}`);
  console.error(`GraphQL Server stderr: ${stderr}`);
});

console.log(
  "Express GraphQL Server is running on http://localhost:4000/graphql...",
);
