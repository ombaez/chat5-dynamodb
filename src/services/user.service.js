const userDao = require('../daos/user.dao');

class userService {
  static async signUp(email, password, userName, firstName, lastName) {
    const result = await userDao.exists(email, 'email');
    const exists = result[0].exists;

    if (exists > 0)
      throw { status: 409, error: 'email_in_use', msg: 'Email en uso' };

    const user = [email, password, userName, firstName, lastName];

    return userDao.signUp(user);
  }

  static async update(id, email, userName, firstName, lastName) {
    const exists = await userDao.exists(id, 'id');
    if (exists[0].exists === 0)
      throw {
        status: 404,
        error: 'user_not_found',
        msg: 'Usuario no encontrado'
      };

    return userDao.update(id, email, userName, firstName, lastName);
  }

  static async delete(id) {
    const exists = await userDao.exists(id, 'id');
    if (exists[0].exists === 0)
      throw {
        status: 404,
        error: 'user_not_found',
        msg: 'Usuario no encontrado'
      };

    return userDao.delete(id);
  }

  static async get(id) {
    const exists = await userDao.exists(id, 'id');
    if (exists[0].exists === 0)
      throw {
        status: 404,
        error: 'user_not_found',
        msg: 'Usuario no encontrado'
      };

    return userDao.get(id);
  }
}

module.exports = userService;
