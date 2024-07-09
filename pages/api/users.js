// pages/api/users.js
import pool from "../../lib/db.js";

export default async function handler(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM user_list');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
