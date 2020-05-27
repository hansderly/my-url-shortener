const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const validUrl = require('valid-url');
const config = require('config');
const urlController = require('../controllers/urlController');

router.get('/', (req, res) => {
	res.render('index');
});

router.post('/shorten', (req, res) => {
	longUrl = req.body.longUrl;
	if (!validUrl.isUri(longUrl)) return res.status(401).json('Invalid url');
	const baseUrl = config.get('baseUrl');
	const urlCode = shortid();
	const shortUrl = baseUrl + '/' + urlCode;
	params = {
		longUrl: longUrl,
		urlCode: urlCode,
		shortUrl: shortUrl
    };
    urlController.addUrl(params);
	console.log(urlCode, shortUrl, params);

	res.render('/shorten');
});

module.exports = router;
