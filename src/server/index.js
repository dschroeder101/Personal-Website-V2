// const express = require('express');
// const path = require('path');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const helpers = require('./helpers');
// const fs = require('fs');
// const ReactDOMServer = require('react-dom/server');
// const App = require('./components/App');

import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3006;

const app = express();

app.use(express.static('./build'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


let pass;

getPass = () => {
  var path = require('path'),
    filePath = path.join(__dirname, 'config.txt');

  fs.readFile(filePath, {
    encoding: 'utf-8'
  }, function(err, data) {
    if (!err) {
      pass = data;
    } else {
      console.log(err);
    }
  });
}

getPass();

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

app.get('/*', (req, res => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if(err) {
      console.error('Error encountered: ', err);
      return res.status(500).send('Oops, something went wrong!');
    }

    return res.send(
      data.replace('<div id ="root"></div>', `<div id="root">${app}</div>`)
    );
  });
}))

app.post('/send', (req, res) => {
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dschroeder101@gmail.com',
      pass: `${pass}`
    }
  });

  const mailOptions = {
    from: email,
    to: 'dschroeder101@gmail.com',
    subject: 'Personal Site - message from ' + name,
    text: message
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.json({
        yo: 'error'
      });
    } else {
      console.log('Message sent: ' + info.response);
      res.json({
        yo: info.response
      });
    };
  })
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
