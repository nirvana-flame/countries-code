'use strict';

const countriesQuery = require('../countries_code'),
    expect = require('chai').expect;

describe('Testsuite - Countries data', () => {
    it('get all country list from countriesQuery', () => {
        const country_list = countriesQuery.allCountriesList();
        expect(country_list.length).to.be.equal(249);
    });
});