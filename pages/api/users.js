import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { FirstName, lastName, Email ,Facility} = req.body;
    if (!FirstName || !lastName || !Email || !Facility) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const result = await pool.query(
        'INSERT INTO user_table (FirstName, lastName, Email, Facility) VALUES (?, ?, ?, ?)',
        [FirstName, lastName, Email, Facility]
      );
      res.status(201).json({ message: 'User added successfully', result });
    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
