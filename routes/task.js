const express = require('express');
let router = new express.Router();
let task = require('../models/Task');

/* GET users listing. */
router.get('/:id?', (req, res, next) => {
  if (req.params.id) {
    task.findByPrimary(req.params.id).then((task) => {
      res.json(task);
    }).catch((err) => {
      res.json(err);
    });
  } else {
    task.findAll().then((task) => {
      res.json(task);
    }).catch((err) => {
      res.json(err);
    });
  }
});

module.exports = router;
