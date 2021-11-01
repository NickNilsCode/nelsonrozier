import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import blogCtrl from './controllers/blogCtrl';

import config from './config';
const Cryptr = require('cryptr');
const cryptr = new Cryptr(config.key);

import { HomeRoot, AboutRoot, PersonalinjuryRoot, PersonalinjurytemplateRoot, CaseresultsRoot, FaqRoot, BlogRoot, BlogcattemplateRoot, BlogtemplateRoot, ContactRoot, DisclaimerRoot, SitemapRoot, PrivacypolicyRoot, AttorneytemplateRoot, SearchRoot } from './roots';

var PORT = process.env.PORT || 3003;
//this is a comment
const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

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
fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
fs.readFile('./dist/js/about.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  aboutBundle = data || "";
})
fs.readFile('./dist/js/personalinjury.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  personalinjuryBundle = data || "";
})
fs.readFile('./dist/js/personalinjurytemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  personalinjurytemplateBundle = data || "";
})
fs.readFile('./dist/js/caseresults.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  caseresultsBundle = data || "";
})
fs.readFile('./dist/js/faq.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  faqBundle = data || "";
})
fs.readFile('./dist/js/blog.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  blogBundle = data || "";
})
fs.readFile('./dist/js/blogcattemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  blogcattemplateBundle = data || "";
})
fs.readFile('./dist/js/blogtemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  blogtemplateBundle = data || "";
})
fs.readFile('./dist/js/contact.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  contactBundle = data || "";
})
fs.readFile('./dist/js/disclaimer.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  disclaimerBundle = data || "";
})
fs.readFile('./dist/js/sitemap.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  sitemapBundle = data || "";
})
fs.readFile('./dist/js/privacypolicy.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  privacypolicyBundle = data || "";
})
fs.readFile('./dist/js/attorneytemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  attorneytemplateBundle = data || "";
})
fs.readFile('./dist/js/search.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  searchBundle = data || "";
})
function checkURL (req, res, extension){
  if(req.get('host') == "www.nelsonrozier.com"){
    res.redirect(`https://www.nrclaw.com${extension}`);
    return false;
  }
  // console.log("crash", req.protocol);
  // if(req.protocol == "http"){
  //   res.redirect(`https://www.nrclaw.com${extension}`);
  //   return false;
  // }
}
app.get('/', (req, res) => {
  checkURL(req, res, "")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});
app.get('/about', (req, res) => {
  checkURL(req, res, "/about")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, aboutBundle, AboutRoot, "about"));
});
app.get('/personal-injury', (req, res) => {
  checkURL(req, res, "/personal-injury")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, personalinjuryBundle, PersonalinjuryRoot, "personalinjury"));
});
app.get('/personal-injury/:id', (req, res) => {
  checkURL(req, res, `/personal-injury/${req.params.id}`)
  let data = {
    page: req.params.id
  }
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, personalinjurytemplateBundle, PersonalinjurytemplateRoot, "personalinjurytemplate"));
});
app.get('/case-results', (req, res) => {
  checkURL(req, res, "/case-results")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, caseresultsBundle, CaseresultsRoot, "caseresults"));
});
app.get('/faq', (req, res) => {
  checkURL(req, res, "/faq")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, faqBundle, FaqRoot, "faq"));
});
app.get('/blog', (req, res) => {
  checkURL(req, res, "/blog")
  let data = {
    query: "",
    category: "",
    year: "",
    month: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "blog"));
});
app.get('/blogcattemplate', (req, res) => {
  checkURL(req, res, "/blogcattemplate")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogcattemplateBundle, BlogcattemplateRoot, "blogcattemplate"));
});
app.get('/blog/search/:query', (req, res) => {
  checkURL(req, res, `/blog/search/${req.params.query}`)
  let data = {
    query: req.params.query,
    category: "",
    year: "",
    month: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "blog"));
});
app.get('/blog/category/:category', (req, res) => {
  checkURL(req, res, `/blog/category/${req.params.category}`)
  let data = {
    category: req.params.category,
    query: "",
    year: "",
    month: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "blog"));
});
app.get('/blog/:year/:month', (req, res) => {
  const { year, month } = req.params;
  checkURL(req, res, `/blog/${year}/${month}`)
  let data = {
    year, month,
    query: "",
    category: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "blog"));
});
app.get('/blog/:year/:month/:title', (req, res) => {
  const { year, month, title } = req.params;
  checkURL(req, res, `/blog/${year}/${month}/${title}`)
  let data = { year, month, title };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogtemplateBundle, BlogtemplateRoot, "blogtemplate"));
});
app.get('/contact', (req, res) => {
  checkURL(req, res, "/contact")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, ContactRoot, "contact"));
});
app.get('/disclaimer', (req, res) => {
  checkURL(req, res, "/disclaimer")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, disclaimerBundle, DisclaimerRoot, "disclaimer"));
});
app.get('/sitemap', (req, res) => {
  checkURL(req, res, "/sitemap")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, sitemapBundle, SitemapRoot, "sitemap"));
});
app.get('/privacy', (req, res) => {
  checkURL(req, res, "/privacy")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, privacypolicyBundle, PrivacypolicyRoot, "privacypolicy"));
});
app.get('/attorney/:name', (req, res) => {
  checkURL(req, res, `/attorney/${req.params.name}`)
  let data = {
    link: `/attorney/${req.params.name}`
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, attorneytemplateBundle, AttorneytemplateRoot, "attorneytemplate"));
});
app.get('/search', (req, res) => {
  checkURL(req, res, "/search")
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, searchBundle, SearchRoot, "search"));
});;

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

app.post('/emailer', (req, res) => {
  res.send({message: "success"})
  let { name, email, phone, state, zip, description, contactemail, contactphone, disclaimer } = req.body;

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(config.nodemailerEmail),
      pass: cryptr.decrypt(config.nodemailerPW)
    }
  });

  transporter.sendMail({
    from: email,
    to: cryptr.decrypt(config.nrEmail),
    subject: 'Nelson Rozier: Online Inquiry',
    html: `
      <h3>Hi! The following person has submitted a message.<h3/>
      <h4>Name: ${name}</h4>

      <h4>Email: ${email}</h4>
      <h4>Phone: ${phone}</h4>
      <h4>State: ${state}</h4>
      <h4>Zip: ${zip}</h4>

      <h3>Message: ${description}</h3>

      <h4>Contact via phone: ${contactphone}</h4>
      <h4>Contact via email: ${contactemail}</h4>
      <h4>Disclaimer Checked: ${disclaimer}</h4>
    `
  }, (error, info) => {
    if (error) res.send({error: error});
    else res.send({response: info});
  });
})

app.get('/api/blogs/getAll', blogCtrl.read);
app.get('/api/blogs/getThree', blogCtrl.readThree);
app.get('/api/blogs/getTen', blogCtrl.readTen);
app.get('/api/blogs/getOne/:id', blogCtrl.readOne);
app.get('/api/blogs/getCategories', blogCtrl.readCategories)
app.get('/api/blogs/getMonths', blogCtrl.readMonths)

app.get('/health', (req, res) => res.send('OK'));

var mongoUri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb+srv://'+cryptr.decrypt(config.dbuser)+':'+cryptr.decrypt(config.dbpass)+'@nelsonrozier.1dnpj.mongodb.net/nelsonrozier?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
 console.log("Connected to mongoDB");
});


app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="msvalidate.01" content="55D6D8A6A04F450FBDDBD5C81164E3B2" />
                <title>${title}</title>
                <meta name="Description" content="${title}">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Open+Sans:wght@700&family=PT+Sans&display=swap" rel="stylesheet">
                <script type="application/ld+json">
                  {
                    "@context": "https://schema.org",
                    "@type": "Attorney",
                    "name": "Nrclaw",
                    "image": "",
                    "@id": "",
                    "url": "https://www.nrclaw.com/",
                    "telephone": "559-713-0159",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "3924 W. Caldwell Ave. Suite A",
                      "addressLocality": "Visalia",
                      "addressRegion": "CA",
                      "postalCode": "93277",
                      "addressCountry": "US"
                    }
                  }
                </script>
                <style>
                  body { margin: 0; font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif; color: #383b40; }
                  a { text-decoration: none; color: #000; }
                </style>
                ${styles}
                <script src="https://kit.fontawesome.com/7fa747235e.js" crossorigin="anonymous"></script>
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-BLVMB709EV"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BLVMB709EV');
              </script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
