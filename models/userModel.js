const pool = require('../database/db');

// Create user
const createUser = async (username, email, passwordHash) => {
  await pool.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, passwordHash]
  );
};

// Find user by email
const findUserByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];  // Return the first row
};

// Save refresh token
const saveRefreshToken = async (userId, token) => {
  await pool.query('INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)', [userId, token]);
};

module.exports = {
  createUser,
  findUserByEmail ,
  saveRefreshToken
};

