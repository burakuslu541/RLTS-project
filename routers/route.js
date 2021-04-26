var express = require("express");
var bodyParser = require("body-parser");
var urlencodeParser = bodyParser.urlencoded({ extended: false });
var validator = require("express-validator");
const Koordinat = require("../models/koordinat");

module.exports = function (app) {
  function isUserAllowed(req, res, next) {
    sess = req.session;
    if (sess.user) {
      return next();
    } else {
      res.redirect("/login");
    }
  }

  app.get("/dashboard-blog", isUserAllowed, function (req, res) {
    res.locals = { title: "Blog Dashboard" };
    res.render("Dashboard/dashboard-blog");
  });

  app.get("/dashboard-saas", isUserAllowed, function (req, res) {
    res.locals = { title: "Saas Dashboard" };
    res.render("Dashboard/dashboard-saas");
  });

  app.get("/dashboard-crypto", isUserAllowed, function (req, res) {
    res.locals = { title: "Crypto Dashboard" };
    res.render("Dashboard/dashboard-crypto");
  });

  app.get("/", isUserAllowed, function (req, res) {
    res.locals = { title: "Dashboard" };
    res.render("Dashboard/index");
  });

  //koordinat
  app.get("/koordinat", async (req, res) => {
    const koordinat = await Koordinat.find()
      .sort({ _id: -1 })
      .limit(1);
    var newKoordinat=[];
    for (let i = 0; i < koordinat.length; i++) {
      newKoordinat.push(parseFloat(koordinat[i].x)) 
      newKoordinat.push(parseFloat(koordinat[i].y)) 
    }
    res.json(newKoordinat)
  });
  
  app.post("/createKoordinat", async (req, res) => {
    const data = req.body;

    await Koordinat.create(data);

    res.json({
      status: true,
    });
  });

  // Maps
  app.get("/maps-google", isUserAllowed, function (req, res) {
    res.locals = { title: "Google Maps" };
    res.render("Maps/maps-google");
  });
  app.get("/maps-vector", isUserAllowed, function (req, res) {
    res.locals = { title: "Vector Maps" };
    res.render("Maps/maps-vector");
  });
  app.get("/maps-leaflet", isUserAllowed, function (req, res) {
    res.locals = { title: "Leaflet Maps" };
    res.render("Maps/maps-leaflet");
  });
  // Charts
  app.get("/charts-apex", isUserAllowed, function (req, res) {
    res.locals = { title: "Charts Apex" };
    res.render("Charts/charts-apex");
  });
  app.get("/charts-echart", isUserAllowed, function (req, res) {
    res.locals = { title: "Charts Echart" };
    res.render("Charts/charts-echart");
  });
  app.get("/charts-chartjs", isUserAllowed, function (req, res) {
    res.locals = { title: "Charts Chartjs" };
    res.render("Charts/charts-chartjs");
  });
  app.get("/charts-flot", isUserAllowed, function (req, res) {
    res.locals = { title: "Charts Flot" };
    res.render("Charts/charts-flot");
  });
  app.get("/charts-tui", isUserAllowed, function (req, res) {
    res.locals = { title: "Charts Toast UI" };
    res.render("Charts/charts-tui");
  });
  app.get("/charts-knob", isUserAllowed, function (req, res) {
    res.locals = { title: "Charts knob" };
    res.render("Charts/charts-knob");
  });
  app.get("/charts-sparkline", isUserAllowed, function (req, res) {
    res.locals = { title: "Charts Sparkline" };
    res.render("Charts/charts-sparkline");
  });
};
