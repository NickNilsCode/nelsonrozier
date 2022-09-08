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

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _blogCtrl = _interopRequireDefault(require("./controllers/blogCtrl"));

var _personalinjurylist = _interopRequireDefault(require("./data/personalinjurylist"));

var _config = _interopRequireDefault(require("./config"));

var _roots = require("./roots");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cryptr = require('cryptr');

var cryptr = new Cryptr(_config["default"].key);
var PORT = process.env.PORT || 3003; //this is a comment

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
    searchBundle = "",
    notfoundBundle = "";

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

_fs["default"].readFile('./dist/js/notfound.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  notfoundBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _roots.HomeRoot, "Best Personal Injury Attorney California | Free Legal Consultation Visalia – Nelson Rozier & Christenson", "Do not suffer from other people’s mistakes. Partner with NRC Law, the best personal injury attorneys in California. We represent plaintiffs and defendants.", "Personal injury attorney California, Free Legal Consultation Visalia, Best Injury Attorney, Best Visalia law firm, Visalia top Experienced law firm, Best Legal Attorney Services California, Best Legal attorney California, Experienced Legal attorney Visalia, Visalia Personal Injury Attorneys, experienced attorney California")); // }
});
app.get('/about', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, aboutBundle, _roots.AboutRoot, "About Your Visalia Personal Injury Lawyers | Nelson Rozier & Christenson", "Our firm has been located in Visalia since 1982. Our attorneys all live in our area and were raised here. We know the people of our community and the surrounding areas.", ""));
});
app.get('/personal-injury', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, personalinjuryBundle, _roots.PersonalinjuryRoot, "Best Injury Lawyers, California | Experienced Personal Injury Attorneys", "Get personalized legal representation by a compassionate, dedicated and experienced personal injury lawyer in California. We take cases on a contingency fee basis.", "Best injuries lawyer California, Professional personal injury lawyer, Attorney for personal injury california, Experienced personal injury attorney"));
}); //all the rest

app.get('/personal-injury/:id', function (req, res) {
  var data = {
    page: req.params.id
  };

  var pi = _personalinjurylist["default"].find(function (a) {
    return a.id == req.params.id;
  });

  if (pi) {
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(data, personalinjurytemplateBundle, _roots.PersonalinjurytemplateRoot, pi.title, pi.description, pi.keywords));
  } else {
    res.send(returnHTML(data, notfoundBundle, _roots.NotFoundRoot, "404 Not Found | NRC Law", "", ""));
  }
});
app.get('/case-results', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, caseresultsBundle, _roots.CaseresultsRoot, "Best Visalia Law Firm Case Results | Nelson Rozier & Christenson", "", ""));
});
app.get('/faq', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, faqBundle, _roots.FaqRoot, "FAQ Personal Injury Visalia | Nelson Rozier & Christenson", "Learn more about personal injury claims with this FAQ for personal injury in California. Contact Nelson Rozier & Christenson for help today!", "Best Injuries Lawyer, Professional Personal Injury, Motorcycle Accident Lawyer, Personal Injury Lawyers Near Me"));
});
app.get('/blog', function (req, res) {
  var data = {
    query: "",
    category: "",
    year: "",
    month: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _roots.BlogRoot, "Read Our Latest Blog & News About Personal Injury Visalia | Nelson Rozier & Christenson", "", ""));
});
app.get('/blogcattemplate', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogcattemplateBundle, _roots.BlogcattemplateRoot, "Blog & News | Nelson Rozier & Christenson", "", ""));
});
app.get('/blog/search/:query', function (req, res) {
  var data = {
    query: req.params.query,
    category: "",
    year: "",
    month: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _roots.BlogRoot, "Blog & News | Nelson Rozier & Christenson", "", ""));
});
app.get('/blog/category/:category', function (req, res) {
  var data = {
    category: req.params.category,
    query: "",
    year: "",
    month: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _roots.BlogRoot, "Blog & News | Nelson Rozier & Christenson", "", ""));
});
app.get('/blog/:year/:month', function (req, res) {
  var _req$params = req.params,
      year = _req$params.year,
      month = _req$params.month;
  var data = {
    year: year,
    month: month,
    query: "",
    category: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _roots.BlogRoot, "Blog & News | Nelson Rozier & Christenson", "", ""));
});
app.get('/blog/:year/:month/:title', function (req, res) {
  var _req$params2 = req.params,
      year = _req$params2.year,
      month = _req$params2.month,
      title = _req$params2.title;
  var data = {
    year: year,
    month: month,
    title: title
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogtemplateBundle, _roots.BlogtemplateRoot, "Blog & News | Nelson Rozier & Christenson", "", ""));
});
app.get('/contact', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, _roots.ContactRoot, "Contact for Best Legal Services California | Nelson Rozier & Christenson", "If you need an Personal Injury Attorneys in California, let us help.  Call 559-713-0159 or fill out the form to schedule your free consultation.", ""));
});
app.get('/disclaimer', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, disclaimerBundle, _roots.DisclaimerRoot, "Disclaimer | Nelson Rozier & Christenson", "", ""));
});
app.get('/sitemap', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, sitemapBundle, _roots.SitemapRoot, "Sitemap | Nelson Rozier & Christenson", "", ""));
});
app.get('/privacy', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, privacypolicyBundle, _roots.PrivacypolicyRoot, "Our Privacy Policy | Nelson Rozier & Christenson", "If you have any additional questions or concerns about this privacy policy, please contact us via the phone number, contact form or mailing address listed on this website.", ""));
});
app.get('/attorney/:name', function (req, res) {
  var data = {
    link: "/attorney/".concat(req.params.name)
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, attorneytemplateBundle, _roots.AttorneytemplateRoot, "Meet Your Visalia Personal Injury Lawyers | Nelson Rozier & Christenson", "", ""));
});
app.get('/search', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, searchBundle, _roots.SearchRoot, "Search | Nelson Rozier & Christenson", "", ""));
});
app.get('/error', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, notfoundBundle, _roots.NotFoundRoot, "404 Not Found | Nelson Rozier & Christenson", "", ""));
});
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.post('/emailer', function (req, res) {
  res.send({
    message: "success"
  });
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      phone = _req$body.phone,
      state = _req$body.state,
      zip = _req$body.zip,
      description = _req$body.description,
      contactemail = _req$body.contactemail,
      contactphone = _req$body.contactphone,
      disclaimer = _req$body.disclaimer;

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
    to: [cryptr.decrypt(_config["default"].nrEmail), cryptr.decrypt(_config["default"].nr2Email)],
    subject: 'Nelson, Rozier & Christenson: Online Inquiry',
    html: "\n      <h3>Hi! The following person has submitted a message.<h3/>\n      <h4>Name: ".concat(name, "</h4>\n\n      <h4>Email: ").concat(email, "</h4>\n      <h4>Phone: ").concat(phone, "</h4>\n      <h4>State: ").concat(state, "</h4>\n      <h4>Zip: ").concat(zip, "</h4>\n\n      <h3>Message: ").concat(description, "</h3>\n\n      <h4>Contact via phone: ").concat(contactphone, "</h4>\n      <h4>Contact via email: ").concat(contactemail, "</h4>\n      <h4>Disclaimer Checked: ").concat(disclaimer, "</h4>\n    ")
  }, function (error, info) {
    if (error) res.send({
      error: error
    });else res.send({
      response: info
    });
  });
});
app.get('/api/blogs/getAll', _blogCtrl["default"].read);
app.get('/api/blogs/getThree', _blogCtrl["default"].readThree);
app.get('/api/blogs/getTen', _blogCtrl["default"].readTen);
app.get('/api/blogs/getOne/:id', _blogCtrl["default"].readOne);
app.get('/api/blogs/getCategories', _blogCtrl["default"].readCategories);
app.get('/api/blogs/getMonths', _blogCtrl["default"].readMonths);
app.get('/health', function (req, res) {
  return res.send('OK');
});
var mongoUri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb+srv://' + cryptr.decrypt(_config["default"].dbuser) + ':' + cryptr.decrypt(_config["default"].dbpass) + '@nelsonrozier.1dnpj.mongodb.net/nelsonrozier?retryWrites=true&w=majority';

_mongoose["default"].connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose["default"].connection.on('error', console.error.bind(console, 'connection error'));

_mongoose["default"].connection.once('open', function () {
  console.log("Connected to mongoDB");
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

function returnHTML(data, bundle, Page, title, description, keywords) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n                <meta name=\"msvalidate.01\" content=\"55D6D8A6A04F450FBDDBD5C81164E3B2\" />\n                <title>".concat(title, "</title>\n                <meta name=\"Description\" content=\"").concat(description, "\"/>\n                <meta name=\"google-site-verification\" content=\"4KRuv64nysKrmujcSKWbxB4YakbtXe5tQtmPJA1Ghaw\"/>\n                <meta name=\"Keywords\" content=\"").concat(keywords, "\"/>\n                <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n                <link href=\"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Open+Sans:wght@700&family=PT+Sans&display=swap\" rel=\"stylesheet\">\n                <script type=\"application/ld+json\">\n                  {\n                    \"@context\": \"https://schema.org\",\n                    \"@type\": \"Attorney\",\n                    \"name\": \"Nrclaw\",\n                    \"image\": \"\",\n                    \"@id\": \"\",\n                    \"url\": \"https://www.nrclaw.com/\",\n                    \"telephone\": \"559-713-0159\",\n                    \"address\": {\n                      \"@type\": \"PostalAddress\",\n                      \"streetAddress\": \"3924 W. Caldwell Ave. Suite A\",\n                      \"addressLocality\": \"Visalia\",\n                      \"addressRegion\": \"CA\",\n                      \"postalCode\": \"93277\",\n                      \"addressCountry\": \"US\"\n                    }\n                  }\n                </script>\n                <style>\n                  body { margin: 0; font-family: \"PT Sans\", Helvetica, Arial, Lucida, sans-serif; color: #383b40; }\n                  a { text-decoration: none; color: #000; }\n                </style>\n                ").concat(styles, "\n                <script src=\"https://kit.fontawesome.com/7fa747235e.js\" crossorigin=\"anonymous\"></script>\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script>").concat(bundle, "</script>\n                <script async src=\"https://www.googletagmanager.com/gtag/js?id=G-BLVMB709EV\"></script>\n              <script>\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'G-BLVMB709EV');\n              </script>\n              <script>\n                let protocol = window.location.protocol;\n                let host = window.location.host;\n                let href = window.location.href;\n                if(protocol == \"http:\" && host != \"localhost:3003\"){\n                  window.location.href = href.split(\"http\").join(\"https\");\n                }\n                if(host == \"www.nelsonrozier.com\"){\n                  window.location.href = href.split(\"www.nelsonrozier.com\").join(\"www.nrclaw.com\");\n                }\n              </script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}
