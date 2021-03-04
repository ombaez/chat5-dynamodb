const jwt = require("jsonwebtoken");
const LLAVE_SECRETA = "llavesecreta";

exports.validateAuthentication = function (req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).send("Authorization header missing");

  const token = req.headers.authorization.split(" ")[1];
  console.log(token);

  if (!token) return res.status(401).send("Authorization header missing");

  jwt.verify(token, LLAVE_SECRETA, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }
    req.decoded = decoded
    next()
  });
};
