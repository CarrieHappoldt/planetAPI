const express = require("express");
const planets = require("../planetFN")

const router = express.Router();

router.get('/v1/planets', function (req, res, next) {
  planets.getAllPlanets()
  .then(planetsArray => res.json(planetsArray))
  .catch(error => next(error) )
});

router.get('/v2/planets/:name', function (req, res, next) {
  planets.getPlanetByName(req.params.name)
  .then(planet => res.json(planet))
  .catch(error => next(error) )
})

module.exports = router