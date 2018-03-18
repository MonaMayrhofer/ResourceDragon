module.exports = function(err, rows) {
  if (err) {
    res.json(err);
  } else {
    res.json(rows);
  }
};
