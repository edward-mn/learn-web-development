const express = require("express");
const router = express();

router.get("/", (req, res) => {
  return res.send({ message: "Tudo ok com o método GET! da RAIZ" });
});

router.post("/", (req, res) => {
  return res.send({ message: "Tudo ok com método POST da RAIZ" });
});

module.exports = router;
