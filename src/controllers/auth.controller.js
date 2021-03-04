const authService = require("../services/auth.service");
const { generateUuid } = require("../utils/uuid.utils");


class authController {
  static async authenticate(req, res) {
    const callId = generateUuid();

    console.log("Call %s %s id: %s", req.method, req.url, callId);

    const { userName, password } = req.body;
    if (
      typeof userName !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(404).send();
    }

    try {

      /* Authenticacion*/
      console.log("Call id: %s response: success", callId);
      const result = await authService.login(userName, password);
      return res.status(200).send(result);
    } catch (error) {
      console.log("Call id: %s error:%s", callId, error, JSON.stringify(error));
      const status = error.status;

      if (status === undefined) return res.status(500).send();

      return res.status(status).send(error);
    }
  }

}

module.exports = authController;
