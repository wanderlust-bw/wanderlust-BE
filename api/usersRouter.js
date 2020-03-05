const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../helpers/universalModel")("users");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");
const Joi = require("@hapi/joi");

const { authenticate } = require("../auth/authenticate");

function errorHandler(err, res) {
  res.status(500).json({ msg: `error retrieving the data`, err });
}
// this is a register post
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  if (checkInput(username, password).value) {
    Users.getBy({ username })
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);

          res.status(200).json({
            userId: user.id,
            userType: user.userType,
            token: token
          });
        } else {
          res.status(401).json({ message: "invalid credentials" });
        }
      })
      .catch(err => {
        // console.log(err);
        res.status(500).json(err.message);
      });
  } else {
    res.status(400).json(checkInput(username, password).error);
  }
});

router.get("/:id", authenticate, async (req, res) => {
  // console.log("i am here");
  try {
    const { id } = req.params;
    const user = await Users.getById(id);
    return res.status(200).json(user);
  } catch (err) {
    return errorHandler(err, res);
  }
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

function checkInput(username, password) {
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
  });
  return schema.validate({ username, password });
}
module.exports = router;
