// api.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeControllers');
const employeeMiddleware = require('../helpers/employeeMiddlewares');

// Define your API routes here
router.post('/register', employeeController.registerUser);
router.get('/protected', employeeMiddleware.verifyToken, (req, res) => {
  // This route is protected by token verification middleware
  res.json({ message: 'Access granted to protected route', user: req.user });
});

module.exports = router;
