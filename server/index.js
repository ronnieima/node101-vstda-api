const server = require("./app");

const PORT = 8484;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}/`);
});
