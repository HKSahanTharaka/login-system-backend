const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const MOCK_USER = {
  id: 1,
  email: 'user@example.com',
  password: '$2b$10$jRDBRbWGmJIG5n9Ep3PQnOUSZaXjouXGDLhj8y5gslujqmvV8fiGm',
  name: 'John Doe'
};


exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    if (email !== MOCK_USER.email) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, MOCK_USER.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: MOCK_USER.id, email: MOCK_USER.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ token, user: { id: MOCK_USER.id, email: MOCK_USER.email, name: MOCK_USER.name } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.me = (req, res) => {
  try {
    res.json({
      user: {
        id: req.user.id,
        email: req.user.email,
        name: MOCK_USER.name
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
