"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _config = _interopRequireDefault(require("./config"));

var _roots = require("./roots");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cryptr = require('cryptr');

var cryptr = new Cryptr(_config["default"].key);
var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    homeBundle = "",
    aboutBundle = "",
    personalinjuryBundle = "",
    personalinjurytemplateBundle = "",
    caseresultsBundle = "",
    faqBundle = "",
    blogBundle = "",
    blogcattemplateBundle = "",
    blogtemplateBundle = "",
    contactBundle = "",
    disclaimerBundle = "",
    sitemapBundle = "",
    privacypolicyBundle = "",
    attorneytemplateBundle = "",
    searchBundle = "";

_fs["default"].readFile('./dist/js/home.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  homeBundle = data || "";
});

_fs["default"].readFile('./dist/js/about.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  aboutBundle = data || "";
});

_fs["default"].readFile('./dist/js/personalinjury.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  personalinjuryBundle = data || "";
});

_fs["default"].readFile('./dist/js/personalinjurytemplate.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  personalinjurytemplateBundle = data || "";
});

_fs["default"].readFile('./dist/js/caseresults.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  caseresultsBundle = data || "";
});

_fs["default"].readFile('./dist/js/faq.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  faqBundle = data || "";
});

_fs["default"].readFile('./dist/js/blog.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  blogBundle = data || "";
});

_fs["default"].readFile('./dist/js/blogcattemplate.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  blogcattemplateBundle = data || "";
});

_fs["default"].readFile('./dist/js/blogtemplate.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  blogtemplateBundle = data || "";
});

_fs["default"].readFile('./dist/js/contact.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  contactBundle = data || "";
});

_fs["default"].readFile('./dist/js/disclaimer.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  disclaimerBundle = data || "";
});

_fs["default"].readFile('./dist/js/sitemap.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  sitemapBundle = data || "";
});

_fs["default"].readFile('./dist/js/privacypolicy.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  privacypolicyBundle = data || "";
});

_fs["default"].readFile('./dist/js/attorneytemplate.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  attorneytemplateBundle = data || "";
});

_fs["default"].readFile('./dist/js/search.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  searchBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _roots.HomeRoot, "home"));
});
app.get('/about', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, aboutBundle, _roots.AboutRoot, "about"));
});
app.get('/personal-injury', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, personalinjuryBundle, _roots.PersonalinjuryRoot, "personalinjury"));
});
app.get('/personal-injury/:id', function (req, res) {
  var data = {
    page: req.params.id
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, personalinjurytemplateBundle, _roots.PersonalinjurytemplateRoot, "personalinjurytemplate"));
});
app.get('/case-results', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, caseresultsBundle, _roots.CaseresultsRoot, "caseresults"));
});
app.get('/faq', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, faqBundle, _roots.FaqRoot, "faq"));
});
app.get('/blog', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _roots.BlogRoot, "blog"));
});
app.get('/blogcattemplate', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogcattemplateBundle, _roots.BlogcattemplateRoot, "blogcattemplate"));
});
app.get('/blog/search/:query', function (req, res) {
  var query = req.params.query;
  var data = {
    link: "/blog/search/".concat(query)
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _roots.BlogRoot, "blog"));
});
app.get('/blog/:year/:month', function (req, res) {
  var _req$params = req.params,
      year = _req$params.year,
      month = _req$params.month;
  var data = {
    link: "/blog/".concat(year, "/").concat(month)
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _roots.BlogRoot, "blog"));
});
app.get('/blog/:year/:month/:title', function (req, res) {
  var _req$params2 = req.params,
      year = _req$params2.year,
      month = _req$params2.month,
      title = _req$params2.title;
  var data = {
    link: "/blog/".concat(year, "/").concat(month, "/").concat(title)
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogtemplateBundle, _roots.BlogtemplateRoot, "blogtemplate"));
});
app.get('/contact', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, _roots.ContactRoot, "contact"));
});
app.get('/disclaimer', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, disclaimerBundle, _roots.DisclaimerRoot, "disclaimer"));
});
app.get('/sitemap', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, sitemapBundle, _roots.SitemapRoot, "sitemap"));
});
app.get('/privacypolicy', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, privacypolicyBundle, _roots.PrivacypolicyRoot, "privacypolicy"));
});
app.get('/attorney/:name', function (req, res) {
  var data = {
    link: "/attorney/".concat(req.params.name)
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, attorneytemplateBundle, _roots.AttorneytemplateRoot, "attorneytemplate"));
});
app.get('/search', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, searchBundle, _roots.SearchRoot, "search"));
});
;
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.post('/emailer', function (req, res) {
  res.send({
    message: "success"
  });
  var _req$body = req.body,
      email = _req$body.email,
      name = _req$body.name,
      description = _req$body.description,
      phone = _req$body.phone;

  var transporter = _nodemailer["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(_config["default"].nodemailerEmail),
      pass: cryptr.decrypt(_config["default"].nodemailerPW)
    }
  });

  transporter.sendMail({
    from: email,
    to: cryptr.decrypt(_config["default"].nodemailerEmail),
    subject: 'Nelson Rozier: Online Inquiry',
    html: "\n      <h3>Hi! The following person has submitted a message.<h3/>\n      <h4>Name: ".concat(name, "</h4>\n      <h4>Email: ").concat(email, "</h4>\n      <h4>Phone: ").concat(phone, "</h4>\n      <h4>Message: ").concat(description, "</h4>\n    ")
  }, function (error, info) {
    if (error) res.send({
      error: error
    });else res.send({
      response: info
    });
  });
});
app.get('/health', function (req, res) {
  return res.send('OK');
});
app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <title>".concat(title, "</title>\n                <meta name=\"Description\" content=\"").concat(title, "\">\n                <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n                <link href=\"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=PT+Sans&display=swap\" rel=\"stylesheet\">\n                <style>\n                  body { margin: 0; font-family: \"PT Sans\", Helvetica, Arial, Lucida, sans-serif; color: #383b40; }\n                  a { text-decoration: none; color: #000; }\n                </style>\n                ").concat(styles, "\n                <script src=\"https://kit.fontawesome.com/7fa747235e.js\" crossorigin=\"anonymous\"></script>\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script>").concat(bundle, "</script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}