const { Router } = require("express");
const { Dog, Temperament } = require("../../db");


const router = Router();



router.post("/", async (req, res, next) => {
    try {
      const { name, height, weight, life_span, image, temperament } = req.body;
      const newDog = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
      });
      const newDogTemperament = await Temperament.findAll({where:{name:temperament}})
      await newDog.addTemperament(newDogTemperament)
      res.status(201).send(newDog);
    } catch (error) {
      next(error);
    }
  });
  
  /* router.post("/:dogId/temperament/:temperamentId", async (req, res, next) => {
    try {
      const { dogId, temperamentId } = req.params;
      const dog = await Dog.findByPk(dogId);
      await dog.addTemperament(temperamentId);
      res.send(200);
    } catch (error) {
      next(error);
    }
  }); */
  

  module.exports = router;