const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../helpers/universalModel")("users");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;
  // console.log(user);

  Users.add(user)
    .then(saved => {
      // console.log("saved", saved);
      res.status(201).json(saved);
    })
    .catch(err => {
      res.status(500).json(err);
      // console.log("error", err.message);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  // console.log(req.body);
  Users.getBy({ username })
    // .first()
    .then(user => {
      // console.log("user", user);
      // console.log(user.username, user.password);
      if (user && bcrypt.compareSync(password, user.password)) {
        // console.log("user", user);
        const token = generateToken(user);

        res.status(200).json({
          message: `welcome ${username}, ${token}`
        });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(err => {
      // console.log(err);
      res.status(500).json(err.message);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ["users"]
  };
  const options = {
    expiresIn: "24hr"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}
module.exports = router;
