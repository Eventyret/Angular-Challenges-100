const express = require("express");
const server = express();
const port = process.env.PORT || 5000;

/**
 * Setting static folder where angular is located
 */
server.use(express.static(process.cwd() + "/dist"));

/**
 * Catch all route to direct to angular
 */
server.use("*", (req, res) => {
  res.sendFile(process.cwd() + "/dist/index.html");
});

/**
 * Starting the server and listing to port
 */
server.listen(port, () => {
  console.log(`Tifa is listening on port ${port}`);
});
