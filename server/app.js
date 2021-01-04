import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
import mongoose from "mongoose";
import http from "http";
var UserModel = require("./model.cjs");
const PostModel = require("./post-model.cjs");
const Schema = mongoose.Schema;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const initialize = require("./passport-config.cjs");
const localStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const app = express();
const server = http.createServer(app);

import cors from "cors";
const corsOptions = {
  origin: "http://localhost:1234",
  methods: ["GET", "POST"],
  credentials: true,
};
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:1234",
    methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["secretHeader"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log("New client connected");
  //console.log(socket);
  socket.on("connected", () => {
    console.log("connecting my way");
  });
  socket.on("onMessage", (message, email) => {
    io.emit("message", message, email);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

/*const User = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});*/
//const UserModel = mongoose.model("User", User);

app.use(cors(corsOptions));
const PORT = 8080;

app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.post("/signin", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user)
      res.json({
        message: "Wrong email or password",
      });
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json({
          message: "working!",
          connected: req.user,
        });
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/signup", (req, res) => {
  UserModel.findOne(
    {
      email: req.body.email,
    },
    (err, result) => {
      if (err) throw err;
      if (result != null)
        res.json({
          message: "Email already used",
        });
      else {
        if (req.body.password === req.body.passwordconfirm) {
          bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) throw err;
            var new_user = new UserModel({
              email: req.body.email,
              password: hash,
            });
            new_user.save(function (err, result) {
              if (err) {
                console.log(err);
              } else {
                console.log(result);
              }
            });
          });
          res.json({
            message: "working!",
          });
        } else {
          res.json({
            message: "The password and it s confirmation don t match",
          });
        }
      }
    }
  );
});
app.post("/post", (req, res) => {
  //console.log(req);
  console.log(req.user);
  console.log(req.body);
  const new_post = new PostModel({
    email: req.user.email,
    post: req.body.posting,
  });
  new_post.save(function (err, result) {
    if (err) {
      console.log(err);
      res.json({ message: "not working!" });
    } else {
      console.log(result, "working!");
      res.json({ message: "working!" });
    }
  });
});
app.get("/posts", async (req, res) => {
  console.log(req.user);
  const all = await PostModel.find();
  res.json(all);
});
server.listen(PORT, () => console.log("Server started on " + PORT));
