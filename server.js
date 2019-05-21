const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("./api/usersRouter.js");
const guideRouter = require("./api/tripsRouter.js");
const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan());
server.use(cors());

server.use("/user", userRouter);
server.use("/user", guideRouter);

server.get("/", async (req, res) => {
  res.status(200).json({ api: "down" });
});

module.exports = server;
