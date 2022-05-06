const { Router } = require("express");
const { Dog, Temperament } = require("../../db");
const axios = require("axios");
const router = Router();

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (id.length < 4) {
    try {
      const listOfDogs = await axios.get("https://api.thedogapi.com/v1/breeds");
      let result = await listOfDogs.data.find((dog) => {
        if (dog.id === parseInt(id)) {
          res.send({
            id: dog.id,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            image: dog.image.url,
            temperament: dog.temperament,
            bred_for: dog.bred_for,
            breed_group: dog.breed_group,
            origin: dog.origin,
          });
        }
      });
      res.json(result);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      if (id.length === 36) {
        Dog.findAll({
          where: { id: id },
          include: {
            model: Temperament,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        }).then((result) => res.send(result));
      } else {
        res.send({ msg: "No dogs found with that id." });
      }
    } catch (error) {
      next(error);
    }
  }
});

module.exports = router;
