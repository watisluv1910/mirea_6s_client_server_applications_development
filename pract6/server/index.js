const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const bodyparser = require('body-parser');

const CLIENT_ID = 'Ov23lirDCiQG63ws4YNm';
const CLIENT_SECRET = '7a4e05201f4b183960a463140b689da32e17088e';

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/getAccessToken', async (req, res) => {
    const params = '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&code=' + req.query.code;

    await fetch("https://github.com/login/oauth/access_token" + params, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        }
    })
        .then((res) => res.json())
        .then((data) => res.json(data));
});

app.get('/getUserData', async (req, res) => {
    req.get('Authorization');
    await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
            Authorization: req.get('Authorization'),
        }
    })
        .then((res) => res.json())
        .then((data) => res.json(data));
});

app.listen(8080, () => {

});
