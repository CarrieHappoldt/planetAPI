const planets = require("./data.json");

function getAllPlanets(){
  return new Promise( (resolve, reject) => {
    if(true){
      resolve(planets)
    } else {
      reject(Error(`No Planets Found`))
    }
  })
}

function getPlanetByName(planetName){
  
  return new Promise( (resolve, reject) => {
    const res = planets.find( function(planet){
        return planet.name === planetName
      })

      if(res) {
        return resolve(res);
      }
      reject(Error(`No planet named ${planetName} found.`))
    })
}  



module.exports = {
  getAllPlanets,
  getPlanetByName
}