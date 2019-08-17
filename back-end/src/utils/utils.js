const EARTH_RADIUS  = require('../constants/constants')
var randomLocation = require('random-location');

const getRadius = (x) => {
	return x * Math.PI / 180;
};

const getDistance = (source, destination) => {

	var earthRaduis = EARTH_RADIUS; // Earth’s mean radius in meter
	var dLat = getRadius(destination.lat - destination.lat);
	var dLong = getRadius(destination.lng - source.lng);
	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(getRadius(source.lat)) *
			Math.cos(getRadius(destination.lat)) *
			Math.sin(dLong / 2) *
			Math.sin(dLong / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var distance = earthRaduis * c;
	return distance;
};

const getRandomizeLocation = (point) => {
	const R = 1000;
	const randonPoint = randomLocation.randomCirclePoint(point, R);
	return randonPoint;
};

module.exports = {getRadius, getDistance, getRandomizeLocation}
