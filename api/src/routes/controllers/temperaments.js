const { Router } = require("express");
const { Temperament } = require("../../db");

const router = Router();

/* router.get("/", (req, res, next) => {
  return Temperament.findAll()
    .then((temperaments) => res.status(200).send(temperaments))
    .catch((err) =>next(err));
}); */

router.get("/", async (req, res, next) => {
  try{
      const db = await Temperament.findAll()
      return res.json(db).status(200)
  } catch (e) {
      return res.json(e.message).status(409)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    const newTemperament = await Temperament.create({ name });
    res.status(201).send(newTemperament);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
