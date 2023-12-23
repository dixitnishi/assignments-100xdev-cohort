const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userName = req.headers["username"];
    const password = req.headers["password"];
  
    User.find({ username: userName, password: password })
      .exec()
      .then((user) =>
        user ? next() : res.status(404).json({ message: "User not found" })
      );
}

module.exports = userMiddleware;