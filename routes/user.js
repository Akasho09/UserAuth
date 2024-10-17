// routes/user.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail, saveRefreshToken } = require('../models/userModel');
const { authenticateToken } = require('../middlewares/jwtauth');
const router = express.Router();

router.post('/register', async (req, res) => {
  const email = req.body.email ;
  const username = req.body.username ;
  const password = req.body.password ;
  const hashedPassword = await bcrypt.hash(password, 5);
  // use 10 instead of 20  salt rounds , inreses performanc
  
  try {
    await createUser(username, email, hashedPassword);
    res.status(201).json("User Created");
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET);
  await saveRefreshToken(user.id, refreshToken);

  res.json({ accessToken, refreshToken });
});

router.post('/token', async (req, res) => {
  const { token } = req.body;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = jwt.sign({ userId: user.userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    res.json({ accessToken });
  });
});

module.exports = router;

  