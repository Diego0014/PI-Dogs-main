const { Router } = require("express");
const { Dog } = require("../../db");


const router = Router();



router.post("/", async (req, res, next) => {
    try {
      const { name, height, weight, life_span, image } = req.body;
      const newDog = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image
      });
      res.status(201).send(newDog);
    } catch (error) {
      next(error);
    }
  });
  
  router.post("/:dogId/temperament/:temperamentId", async (req, res, next) => {
    try {
      const { dogId, temperamentId } = req.params;
      const dog = await Dog.findByPk(dogId);
      await dog.addTemperament(temperamentId);
      res.send(200);
    } catch (error) {
      next(error);
    }
  });
  

  module.exports = router;