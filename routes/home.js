const express = require('express');
const router = express.Router();
const db = require('../models');
const Card = db.Card;
const bodyParser = require('body-parser');


router.route('/')
  .get((req, res) => {
    console.log('req: ', req);
    Card.findAll()
      .then(card => {
        res.json(card);
      })
      .catch((err) => {
        console.error(err);
        res.json(err);
      })
  })
  .post((req,res) => {
    Card.create({
      title: req.body.title,
      priority: req.body.priority,
      status: req.body.status,
      created_by: req.body.created_by,
      assigned_to: req.body.assigned_to
    })
    .then( card => {
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err);
    })
  })



module.exports = router;