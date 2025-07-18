// server/utils/generateToken.js

import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d', // or '1h', '30m', etc.
  });
};

export default generateToken;
