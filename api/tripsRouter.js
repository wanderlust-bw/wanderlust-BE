const router = require("express").Router();
const Trips = require("../helpers/universalModel")("trips");
const { authenticate } = require("../auth/authenticate");

function errorHandler(err, res) {
  res.status(500).json({ msg: `error retrieving the data`, err });
}

router.get("/trip", authenticate, (req, res) => {
  // console.log("trips", trips);
  Trips.get("trips")
    .then(trips => {
      res.json(trips);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
router.get("/trip/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const experiences = await Trips.getById(id);
    return res.status(200).json(experiences);
  } catch (err) {
    return errorHandler(err, res);
  }
});
router.post("/trip", authenticate, async (req, res) => {
  try {
    const experiences = req.body;
    const newExperiences = await Trips.add(experiences);
    return res.status(201).json(newExperiences);
  } catch (err) {
    return errorHandler(err, res);
  }
});
router.put("/trip/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const experience = await Trips.edit(id, changes);
    const trips = await Trips.get("trips")
      .then(trips => {
        res.json(trips);
      })
      .catch(err => {
        res.status(500).json(err);
      });
    return res.status(200).json(trips);
  } catch (err) {
    return errorHandler(err, res);
  }
});
router.delete("/trip/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Trips.remove(id);
    const trips = await Trips.get("trips")
      .then(trips => {
        res.json(trips);
      })
      .catch(err => {
        res.status(500).json(err);
      });
    return res.status(200).json(trips);
  } catch (err) {
    return errorHandler(err, res);
  }
});
router.get("/trip/:id/profile", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Trips.getUserPosts(id);
    return res.status(200).json(post);
  } catch (err) {
    return errorHandler(err, res);
  }
});

module.exports = router;
