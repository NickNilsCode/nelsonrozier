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
import pidata from './data/personalinjurylist';

import config from './config';
const Cryptr = require('cryptr');
const cryptr = new Cryptr(config.key);

import { HomeRoot, AboutRoot, PersonalinjuryRoot, PersonalinjurytemplateRoot, CaseresultsRoot, FaqRoot, BlogRoot, BlogcattemplateRoot, BlogtemplateRoot, ContactRoot, DisclaimerRoot, SitemapRoot, PrivacypolicyRoot, AttorneytemplateRoot, SearchRoot, NotFoundRoot } from './roots';


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
    searchBundle = "",
    notfoundBundle = "";
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
fs.readFile('./dist/js/notfound.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  notfoundBundle = data || "";
})

app.get('/', (req, res) => {
    let data = "";
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(data, homeBundle, HomeRoot, "Best Personal Injury Attorney California | Free Legal Consultation Visalia – NRC Law Firms", "Do not suffer from other people’s mistakes. Partner with NRC Law, the best personal injury attorneys in California. We represent plaintiffs and defendants.", "Personal injury attorney California, Free Legal Consultation Visalia, Best Injury Attorney, Best Visalia law firm, Visalia top Experienced law firm, Best Legal Attorney Services California, Best Legal attorney California, Experienced Legal attorney Visalia, Visalia Personal Injury Attorneys, experienced attorney California"));
  // }
});
app.get('/about', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, aboutBundle, AboutRoot, "About Your Visalia Personal Injury Lawyers | Nelson Rozier & Christenson", "Our firm has been located in Visalia since 1982. Our attorneys all live in our area and were raised here. We know the people of our community and the surrounding areas.", ""));
});
app.get('/personal-injury', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, personalinjuryBundle, PersonalinjuryRoot, "Best Injury Lawyers Visalia, California | Experienced Personal Injury Attorneys", "Get personalized legal representation by a compassionate, dedicated and experienced personal injury lawyer in California. We take cases on a contingency fee basis.", "Best injuries lawyer California, Professional personal injury lawyer, Attorney for personal injury california, Experienced personal injury attorney"));
});

//all the rest
app.get('/personal-injury/:id', (req, res) => {
  let data = {
    page: req.params.id
  }
  let pi = pidata.find(a => a.id == req.params.id);
  if(pi){
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(data, personalinjurytemplateBundle, PersonalinjurytemplateRoot, pi.title, pi.description, pi.keywords));
  } else {
    res.send(returnHTML(data, notfoundBundle, NotFoundRoot, "404 Not Found | NRC Law", "", ""));
  }

});

app.get('/case-results', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, caseresultsBundle, CaseresultsRoot, "Best Visalia Law Firm Case Results | Nelson Rozier & Christenson", "See our successful case results if you have a similar case and need an attorney, call us today at 559-713-0159 or contact our office to schedule a free consultation.", ""));
});
app.get('/faq', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, faqBundle, FaqRoot, "FAQ Personal Injury Visalia | Nelson Rozier & Christenson", "Learn more about personal injury claims with this FAQ for personal injury in California. Contact Nelson Rozier & Christenson for help today!", ""));
});
app.get('/blog', (req, res) => {
  let data = {
    query: "",
    category: "",
    year: "",
    month: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "Read Our Latest Blog & News About Personal Injury Visalia | Nelson Rozier & Christenson", "", ""));
});
app.get('/blogcattemplate', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogcattemplateBundle, BlogcattemplateRoot, "Blog & News at Nelson Rozier & Christenson", "", ""));
});
app.get('/blog/search/:query', (req, res) => {
  let data = {
    query: req.params.query,
    category: "",
    year: "",
    month: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "Blog | Nelson Rozier & Christenson", "", ""));
});
app.get('/blog/category/:category', (req, res) => {
  let data = {
    category: req.params.category,
    query: "",
    year: "",
    month: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "Blog | Nelson Rozier & Christenson", "", ""));
});
app.get('/blog/:year/:month', (req, res) => {
  const { year, month } = req.params;
  let data = {
    year, month,
    query: "",
    category: ""
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "Blog | Nelson Rozier & Christenson", "", ""));
});
app.get('/blog/:year/:month/:title', (req, res) => {
  const { year, month, title } = req.params;
  let data = { year, month, title };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogtemplateBundle, BlogtemplateRoot, "Blog | Nelson Rozier & Christenson", "", ""));
});
app.get('/contact', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, ContactRoot, "Contact for Best Legal Services California | Nelson Rozier & Christenson", "If you need an Personal Injury Attorneys in California, let us help.  Call 559-713-0159 or fill out the form to schedule your free consultation.", ""));
});
app.get('/disclaimer', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, disclaimerBundle, DisclaimerRoot, "Disclaimer | Nelson Rozier & Christenson", "", ""));
});
app.get('/sitemap', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, sitemapBundle, SitemapRoot, "Sitemap | Nelson Rozier & Christenson", "", ""));
});
app.get('/privacy', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, privacypolicyBundle, PrivacypolicyRoot, "Our Privacy Policy | Nelson Rozier & Christenson", "", ""));
});
app.get('/attorney/:name', (req, res) => {
  let data = {
    link: `/attorney/${req.params.name}`
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, attorneytemplateBundle, AttorneytemplateRoot, "Meet Your Visalia Personal Injury Lawyers | Nelson Rozier & Christenson", "", ""));
});
app.get('/search', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, searchBundle, SearchRoot, "Search | NRC Law", "", ""));
});

app.get('/error', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, notfoundBundle, NotFoundRoot, "404 Not Found | NRC Law", "", ""));
});

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
    to: [
      cryptr.decrypt(config.nrEmail),
      cryptr.decrypt(config.nr2Email)
    ],
    subject: 'Nelson, Rozier & Christenson: Online Inquiry',
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

function returnHTML(data, bundle, Page, title, description, keywords){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="msvalidate.01" content="55D6D8A6A04F450FBDDBD5C81164E3B2" />
                <title>${title}</title>
                <meta name="Description" content="${description}"/>
		<link rel="canonical" href="{{ page.url }}" />
                <meta name="google-site-verification" content="4KRuv64nysKrmujcSKWbxB4YakbtXe5tQtmPJA1Ghaw"/>
                <meta name="Keywords" content="${keywords}"/>
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Open+Sans:wght@700&family=PT+Sans&display=swap" rel="stylesheet">
                <script type="application/ld+json">
                  {
                    "@context": "https://schema.org",
                    "@type": "Attorney",
                    "name": "Nelson Rozier & Christenson",
                    "image": "https://www.nrclaw.com/images/nelson.png",
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
		
		<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-180738835-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-180738835-1');
</script>
	
	<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JHY6MME7XL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JHY6MME7XL');
</script>
	
		<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGNFJWW');</script>
<!-- End Google Tag Manager -->

<meta name="google-site-verification" content="QcxUyvtxY2put4kvP8hB4qGQ364ORLZJjLOujBHmgx4" />
		
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>		
		<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGNFJWW"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-BLVMB709EV"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BLVMB709EV');
              </script>
              <script>
                let protocol = window.location.protocol;
                let host = window.location.host;
                let href = window.location.href;
                if(protocol == "http:" && host != "localhost:3003"){
                  window.location.href = href.split("http").join("https");
                }
                if(host == "www.nelsonrozier.com"){
                  window.location.href = href.split("www.nelsonrozier.com").join("www.nrclaw.com");
                } else if(host == "nelsonrozier.com"){
                  window.location.href = href.split("nelsonrozier.com").join("www.nrclaw.com");
                }
              </script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
