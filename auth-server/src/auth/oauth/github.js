'use strict';

const superagent = require('superagent');
const Users = require('../users-model');
require('dotenv');

const grab = `https://github.com/login/oauth/authorize`;
const create = `https://github.com/login/oauth/access_token`;

let authorize = (request) => {
  console.log('(1)', request.query.code)
  superagent.post(create)
    .type('form')
    .send({
      code: request.query.code,
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      redirect_uri: 'http://localhost:3000/oauth',
    })
    .then(res => {
      console.log(res);
    })
}

module.exports = authorize;