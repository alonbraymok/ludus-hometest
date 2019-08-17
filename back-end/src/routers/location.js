const express = require('express');
const { getRadius, getDistance, getRandomizeLocation } = require('../utils/utils');
const router = new express.Router();

router.post('/distance', (req, res) => {
	const { source, destination } = req.body;
	const distance = getDistance(source, destination);
	console.log('34343', distance)
	res.status(200).send(JSON.stringify(distance));
});

router.post('/getRandomLocation', (req, res) => {
	const { location } = req.body;
	const destLocation = getRandomizeLocation(location);
	res.status(200).send(JSON.stringify(destLocation));
});

module.exports = router;