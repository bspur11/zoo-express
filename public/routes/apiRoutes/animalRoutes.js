// Remember that ../ is one level higher, so ../../ is two levels higher. 11.4.4
const router = require("express").Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal, } = require("../../lib/animals");
const { animals } = require("../../data/animals");

router.get("/animals", (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get("/animals/:id", (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// 11.2.3 First, notice that this is just another method of the router object that allows us to create routes, much like router.get(). This method doesn't say get though—it says post, which means that we defined a route that listens for POST requests, not GET requests. POST requests differ from GET requests in that they represent the action of a client requesting the server to accept data rather than vice versa.//

router.post("/animals", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = animals.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateAnimal(req.body)) {
    res.status(400).send("The animal is not properly formatted.");
  } else {
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
  }
});

module.exports = router; //11.4.4


