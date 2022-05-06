const { Router } = require("express");
const getDogsRoute = require("./controllers/getDogs");
const getDogsById = require("./controllers/getDogsById");
const postDogsRoute = require("./controllers/postDogs");
const temperamentRoute = require("./controllers/temperaments");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", getDogsRoute);
router.use("/dogs", getDogsById);
router.use("/dogs", postDogsRoute);
router.use("/temperaments", temperamentRoute);

module.exports = router;
