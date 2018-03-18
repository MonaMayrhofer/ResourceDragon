module.exports = function() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.status(403).json({message: 'Forbidden'});
    }
  };
};
