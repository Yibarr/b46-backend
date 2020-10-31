const { UserService } = require('../services/index.js');
const auth = require('../utils/auth.js');

module.exports = {
  signup: async (req, res, next) => {
    try {
      const { body } = req;
      const user = await UserService.create(body);
      user.password = undefined;
      res.status(201).json({ message: 'User created', payload: user });
    } catch (error) {
      next(error.message);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await UserService.findOneByEmail(email);
      if (!user) throw new Error('Error on credentials.');
      const isValid = auth.comparePasswords(password, user.password);
      if (!isValid) throw new Error('Error on credentials');
      const token = auth.createToken(user);
      res.status(200).json({ message: 'Log in', payload: token });
    } catch (error) {
      next(error.message);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { params } = req;
      const user = await UserService.findOne(params.id);
      res.status(200).json({ message: 'Ok', payload: user });
    } catch (error) {
      next(error.message);
    }
  },
  updateOne: async (req, res, next) => {
    try {
      const { body, params } = req;
      const user = await UserService.findOne(params.id);
      const updatedUser = await UserService.updateOne(user, body);
      res.status(200).json({ message: 'Ok', payload: updatedUser });
    } catch (error) {
      next(error.message);
    }
  },
  deleteOne: async (req, res, next) => {
    try {
      const { params } = req;
      const deletedUser = await UserService.deleteOneById(params.id);
      res.status(200).json({ message: 'Deleted user', payload: deletedUser });
    } catch (error) {
      next(error.message);
    }
  },
};
