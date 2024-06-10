
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");


// User Routes
<<<<<<< HEAD
app.post("/signup", (req, res) => {
  // Implement user signup logic
  User.create({ username: req.username, password: req.password }).then(
    res.status(201).json({ message: "User created successfully" })
  );
});

app.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((course) => res.json(course));
});

app.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

app.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic

=======
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
>>>>>>> 081be9ec66420098381ce7ce9e4291ba35ec3658
});

module.exports = router