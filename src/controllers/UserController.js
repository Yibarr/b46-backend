const { UserService } = require('../services/index.js');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { body } = req;
      const user = await UserService.create(body);
      res.status(201).json({ message: 'User created', payload: user });
    } catch (error) {
      next(error.message);
    }
  },
  // READ
  // UPDATE
  // DELETE
};
