const express = require("express");
const router = express();

router.get("/", (req, res) => {
  return res.send({ message: "Tudo ok com o método GET! da USERS" });
});

router.post("/", (req, res) => {
  return res.send({ message: "Tudo ok com método POST da USERS" });
});

router.post("/create", (req, res) => {
  return res.send({ message: "Seu usuário foi criado =)" });
});

module.exports = router;
