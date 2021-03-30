const jwt = require("jsonwebtoken");

const verifyToken = ({ token, secretKey }) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decode) => {
      if (err) return reject(err);

      return resolve(decode);
    });
  });

module.exports = { verifyToken };
