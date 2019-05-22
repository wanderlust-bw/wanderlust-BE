const router = require("express").Router();
const Trips = require("../helpers/universalModel")("trips");

const { authenticate } = require("../auth/authenticate");

router.get("/trip", authenticate, (req, res) => {
  Trips.get("trips")
    .then(trips => {
      res.json(trips);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
router.post("/trip", authenticate, async (req, res) => {
  try {
    const experiences = req.body;
    const newExperiences = await Trips.add(experiences);
    return res.status(201).json(newExperiences);
  } catch (err) {
    console.log(err);
  }
});
router.put("/trip/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const experience = await Trips.edit(id, changes);
    return res.status(200).json({ msg: "update success", experience });
  } catch (err) {
    console.log(err);
  }
});
router.delete("/trip/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Trips.remove(id);
    return res.status(200).json({ msg: "delete success", experience });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
