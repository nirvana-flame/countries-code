'use strict';

const countries_data = require('./db/countries_data.json'),
    alpha2ToCountryMap = require('./db/alpha2ToCountryMap.json'),
    alpha3ToCountryMap = require('./db/alpha3ToCountryMap.json'),
    alpha2ToAlpha3Map = require('./db/alpha2ToAlpha3.json'),
    alpha3ToAlpha2Map = require('./db/alpha3ToAlpha2.json'),
    wrongInputErrorMsg = 'Wrong Country Code Input';

exports.allCountriesList = () => {
    return countries_data;
};

exports.getAllAlphaTwoCodes = () => {
    const alpha2countries = require('./db/alpha2.json');
    return alpha2countries;
};

exports.getAllAlphaThreeCodes = () => {
    const alpha3countries = require('./db/alpha3.json');
    return alpha3countries;
};

exports.getCountry = countryCode => {
    countryCode = countryCode ? countryCode.toUpperCase() : null;
    if (isAlphaTwo(countryCode)) {
        return alpha2ToCountryMap[countryCode] || wrongInputErrorMsg;
    }
    return alpha3ToCountryMap[countryCode] || wrongInputErrorMsg;
};

exports.convertAlphaCode = countryCode => {
    countryCode = countryCode ? countryCode.toUpperCase() : null;
    if (isAlphaTwo(countryCode)) {
        return alpha2ToAlpha3Map[countryCode] || wrongInputErrorMsg;
    }
    return alpha3ToAlpha2Map[countryCode] || wrongInputErrorMsg;
};

function isAlphaTwo(countryCode) {
    return countryCode && countryCode.length === 2;
}