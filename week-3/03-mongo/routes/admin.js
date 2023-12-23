const express = require('express');
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

const app = express();
// Admin Routes
app.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({ username: req.username, password: req.password }).then(
    res.status(201).json({ message: "Admin created successfully" })
  );
});

app.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
});

app.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((course) => res.json(course));
});

module.exports = router;
