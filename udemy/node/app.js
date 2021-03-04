const express = require("express");
const app = express();
const indexRoute = require("./routes/index");
const usersRoute = require("./routes/users");

app.use("/", indexRoute);
app.use("/users", usersRoute);

/*
app.get("/", (req, res) => {
  let obj = req.query;

  return res.send({
    message: `Tudo ok com o método GET! \nVocê enviou o nome ${obj.nome} com idade de ${obj.idade}`,
  });
});

app.post("/", (req, res) => {
  return res.send({ message: "Tudo ok com método POST" });
});

*/

app.listen(3000);

module.exports = app;
