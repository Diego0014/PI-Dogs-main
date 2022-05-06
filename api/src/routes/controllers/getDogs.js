const { Router } = require("express");
const { Dog, Temperament } = require("../../db.js");
const router = Router();
const axios = require("axios");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    try {
      var database = await Dog.findAll({
        include: {
          model: Temperament,
          attributes: {
            include: ["name"],
            exclude: ["createdAt", "updatedAt"],
          },
          through: {
            attributes: [],
          },
        },
      });
      const api = await axios.get("https://api.thedogapi.com/v1/breeds");
      Promise.all([database, api]).then((results) => {
        const [databased, apiData] = results;
        let filteredDogApi = apiData.data.map((e) => {
          return {
            id: e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            image: e.image.url,
            temperament: e.temperament,
            bred_for: e.bred_for,
            breed_group: e.breed_group,
            origin: e.origin,
          };
        });
        const response = [...filteredDogApi, ...databased];
        res.send(response);
      });
    } catch (error) {
      next(error);
      res.send(error.message);
    }
  } else {
    try {
      var database = await Dog.findAll({
        include: {
          model: Temperament,
          attributes: {
            include: ["name"],
          },
          through: {
            attributes: [],
          },
        },
      });

      const api = await axios.get("https://api.thedogapi.com/v1/breeds");
      let dogs = await Promise.all([database, api]).then((results) => {
        const [databased, apiData] = results;
        let filteredDogApi = apiData.data.map((e) => {
          return {
            id: e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            image: e.image.url,
            temperament: e.temperament,
            bred_for: e.bred_for,
            breed_group: e.breed_group,
            origin: e.origin,
          };
        });
        const response = [...filteredDogApi, ...databased];
        return response;
      });
      let resultado = [];
      for (let i = 0; i < dogs.length; i++) {
        if (dogs[i].name.toLowerCase().includes(name.toLowerCase())) {
          resultado.push(dogs[i]);
        }
      }
      res.send(resultado).status(200);
    } catch (error) {
      next(error);
      console.log(error);
      res.send({ error: "Dog does not exist" }).status(404);
    }
  }
});

module.exports = router;
