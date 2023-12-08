"use strict";

var BlogModel = require('./../models/blogModel');
var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
module.exports = {
  read: function read(req, res) {
    BlogModel.find().exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readCategories: function readCategories(req, res) {
    BlogModel.find().exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        var categories = {};
        result.map(function (a) {
          a.categories.map(function (b) {
            categories[b] = categories[b] ? categories[b] + 1 : 1;
          });
        });
        var categoriesList = Object.keys(categories).map(function (a) {
          return {
            name: a,
            qty: categories[a]
          };
        });
        res.send(categoriesList);
      }
    });
  },
  readMonths: function readMonths(req, res) {
    BlogModel.find().exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        var months = {};
        result.map(function (a) {
          var date = new Date(a.date);
          var newmonth = date.getMonth() + 1;
          var monthstring = newmonth > 9 ? newmonth : "0" + newmonth;
          var newyear = date.getFullYear();
          var string = newyear + "/" + monthstring;
          var title = monthList[newmonth - 1] + " " + newyear;
          months[title] = months[title] ? [string, months[title][1] + 1] : [string, 1];
        });
        var monthResponse = Object.keys(months).map(function (a) {
          return {
            title: a,
            src: months[a][0],
            qty: months[a][1]
          };
        });
        res.send(monthResponse);
      }
    });
  },
  readThree: function readThree(req, res) {
    BlogModel.find(null, null, {
      limit: 3
    }).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readTen: function readTen(req, res) {
    var _req$query = req.query,
      category = _req$query.category,
      query = _req$query.query,
      month = _req$query.month,
      year = _req$query.year;
    BlogModel.find().exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        var finalResult = [];
        if (month && year) {
          finalResult = result.filter(function (a) {
            var date = new Date(a.date);
            var rmonth = date.getMonth() + 1;
            rmonth = rmonth > 9 ? rmonth : "0" + rmonth;
            var ryear = date.getFullYear();
            return rmonth == month && ryear == year;
          });
        } else if (category) {
          finalResult = result.filter(function (a) {
            return a.categories.find(function (b) {
              return b.toLowerCase() == category.toLowerCase().split("-").join(" ");
            });
          });
        } else if (query) {
          finalResult = result.filter(function (a) {
            return a.author.toLowerCase().includes(query.toLowerCase()) || a.blurb.toLowerCase().includes(query.toLowerCase()) || a.title.toLowerCase().includes(query.toLowerCase()) || a.categories.find(function (b) {
              return b.toLowerCase().includes(query.toLowerCase());
            });
          });
        } else {
          finalResult = result;
        }
        res.send(finalResult);
      }
    });
  },
  readOne: function readOne(req, res) {
    BlogModel.findById(req.params.id).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};