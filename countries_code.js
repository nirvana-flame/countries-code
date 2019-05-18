'use strict';

const countries_data = require('./db/countries_data.json');

exports.allCountriesList = () => {
    return countries_data
};;