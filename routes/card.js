const express = require('express');
const router = express.Router();
const db = require('../models');
const Card = db.Card;
const bodyParser = require('body-parser');


router.route('/')
  .get((req, res) => {
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
    console.log('req.body: ', req.body);
    Card.create({
      title: req.body.title,
      priority: req.body.priority,
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


router.route('/:id')
  .get((req, res) => {
    Card.findAll({
      where: {
        id: req.params.id
      }
    })
    .then( card => {
      res.json(card);
    })

  })
  .put((req, res) => {
    Card.update({
      title: req.body.title,
      priority: req.body.priority,
      status: req.body.status,
      created_by: req.body.created_by,
      assigned_to: req.body.assigned_to
    },{
      where: {
        id: req.params.id
      }
    })
    .then( card => {
        res.json(card);
    })
    .catch((err) => {
      console.log(err.errors);
      res.json(err.errors[0].message);
    })
  })
  .delete((req,res) => {
    Card.destroy({
      where: {
        id: req.params.id
      }
    })
    .then( card => {
        res.json(card);
    })
    .catch((err) => {
      console.log(err);
    })
  })



module.exports = router;