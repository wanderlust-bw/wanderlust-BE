const router = require("express").Router();
const Users = require("../helpers/universalModel")("tour");

const { authenticate } = require("../auth/authenticate");

router.get("/trip", authenticate, (req, res) => {
  Users.get()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
