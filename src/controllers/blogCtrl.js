var BlogModel = require('./../models/blogModel');
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

module.exports = {
  read: function(req, res){
    BlogModel
    .find()
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readCategories: function(req, res){
    BlogModel
    .find()
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        let categories = {};
        result.map(a => {
          a.categories.map(b => {
            categories[b] = categories[b] ? categories[b] + 1 : 1;
          })
        });
        let categoriesList = Object.keys(categories).map(a => {
          return {
            name: a,
            qty: categories[a]
          }
        })
        res.send(categoriesList);
      }
    });
  },
  readMonths: function(req, res){
    BlogModel
    .find()
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        let months = {};
        result.map(a => {
          let date = new Date(a.date);
          let newmonth = date.getMonth() + 1;
          let monthstring = newmonth > 9 ? newmonth : "0" + newmonth;
          let newyear = date.getFullYear();
          let string = newyear + "/" + monthstring;
          let title = monthList[newmonth - 1] + " " + newyear;
          months[title] = months[title] ? [string, months[title][1] + 1] : [string, 1]
        });
        let monthResponse = Object.keys(months).map(a => {
          return {
            title: a,
            src: months[a][0],
            qty: months[a][1]
          }
        })
        res.send(monthResponse);
      }
    });
  },
  readThree: function(req, res){
    BlogModel
    .find(null, null, { limit : 3 })
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readTen: function(req, res){
    let { category, query, month, year } = req.query;
    BlogModel
    .find()
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        let finalResult = [];
        if(month && year){
          finalResult = result.filter(a => {
            let date = new Date(a.date);
            let rmonth = date.getMonth() + 1;
            rmonth = rmonth > 9 ? rmonth : "0" + rmonth
            let ryear = date.getFullYear();
            return rmonth == month && ryear == year;
          })
        } else if(category){
          finalResult = result.filter(a => {
            return (a.categories.find(b => b.toLowerCase() == category.toLowerCase().split("-").join(" ")))
          })
        }else if(query){
          finalResult = result.filter(a => {
            return (
              a.author.toLowerCase().includes(query.toLowerCase()) ||
              a.blurb.toLowerCase().includes(query.toLowerCase()) ||
              a.title.toLowerCase().includes(query.toLowerCase()) ||
              a.categories.find(b => b.toLowerCase().includes(query.toLowerCase()))
            )
          })
        } else {
          finalResult = result;
        }
        res.send(finalResult);
      }
    });
  },
  readOne: function(req, res){
    BlogModel
    .findById(req.params.id)
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
