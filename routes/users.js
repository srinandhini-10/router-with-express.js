const express = require('express');
const router = express.Router();   // Mini router

// GET all users
router.get('/', (req, res) => {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] });
});

// GET single user by ID (the :id is a URL parameter)
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ user: `User with ID ${id}` });
});

// POST create new user
router.post('/', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ created: newUser });
});

module.exports = router;           // Export so server.js can use it