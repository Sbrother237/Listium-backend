const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const models = require("../models");
const Sequelize = require("sequelize");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Listium" });
});

router.get("/events", function (req, res, next) {
  models.event.findAll({}).then((eventsFound) => {
    res.render("events", {
      events: eventsFound,
    });
  });
});

router.get("/event/:id", function (req, res, next) {
  let eventId = parseInt(req.params.id);
  models.event
    .findOne({
      where: {
        eventId: eventId,
      },
    })
    .then((event) => {
      res.render("specificEvent", {
        event: event,
      });
    });
});

module.exports = router;
