const express           = require('express');
const router            = express.Router();
const asyncMiddleware   = require('../../utils/asyncMiddleware');

const { getCityByIp }                             = require('./ipAPI/ip');
const { getForecastCityData, getCurrentCityData } = require('./weatherAPI/weather');

router.get('/location', asyncMiddleware(async (req, res) => {
    const city = await getCityByIp(req.ip);
    res.send(city);
}));

router.get('/current/:city?', asyncMiddleware(async(req, res) => {
    const city              = req.query.city || await getCityByIp(req.ip);
    const currentCityData   = await getCurrentCityData(city);
    res.send(currentCityData);
}));

router.get('/forecast/:city?', asyncMiddleware(async(req, res) => {
    const city              = req.query.city || await getCityByIp(req.ip);
    const forecastCityData  = await getForecastCityData(city);
    res.send(forecastCityData);
}));

module.exports = router;