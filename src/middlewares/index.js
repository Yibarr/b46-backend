module.exports = {
  logDate: (req, res, next) => {
    const date = new Date();
    console.log(date.toUTCString());
    next();
  },
};
