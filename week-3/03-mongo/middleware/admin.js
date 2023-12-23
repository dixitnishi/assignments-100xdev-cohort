const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const userName = req.headers["username"];
  const password = req.headers["password"];

  Admin.find({ username: userName, password: password })
    .exec()
    .then((adminUser) =>
      adminUser ? next() : res.status(404).json({ message: "User not found" })
    );
}

module.exports = adminMiddleware;
