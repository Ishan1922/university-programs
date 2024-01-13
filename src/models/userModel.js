// src/models/userModel.js
const pool = require('../config/db');

class UserModel {
  static async getUserByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = $1';
    const values = [username];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserModel;
