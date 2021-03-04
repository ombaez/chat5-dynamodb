const userDao = require("../daos/user.dao");
const jwt = require("jsonwebtoken");
const LLAVE_SECRETA = "llavesecreta";

class authService {
  static async login(userName, password) {
    // const checkUser = await userDao.exists()


    if (password == ! "helloworld") {
      console.log("Password equivocada");
      throw {
        status: 401,
        error: "invalid_login",
        msg: "No es posible realizar al login",
      };
    }

    console.log("Username y password son correctos");

    const payload = { check: true, role: "user" };

    const token = jwt.sign(payload, LLAVE_SECRETA, {
      expiresIn: 60 * 60,
    });

    console.log(token);
    return {
      token: token,
      msg: "success",
    };
  }
}

module.exports = authService;
