'use strict';

const countriesQuery = require('../countries_code'),
    expect = require('chai').expect,
    error = 'Wrong Country Code Input';

describe('Testsuite - Countries data', () => {
    it('get all country list from countriesQuery', () => {
        const country_list = countriesQuery.allCountriesList();
        expect(country_list.length).to.be.equal(249);
    });

    it('get all getAllAlphaTwoCodes list', () => {
        const country_list = countriesQuery.getAllAlphaTwoCodes();
        expect(country_list.length).to.be.equal(249);
        expect(country_list[0]).to.be.equal('AF');
    });

    it('get all getAllAlphaThreeCodes list', () => {
        const country_list = countriesQuery.getAllAlphaThreeCodes();
        expect(country_list.length).to.be.equal(249);
        expect(country_list[0]).to.be.equal('AFG');
    });

    it('get country name by aplha-2/3 code', () => {
        expect(countriesQuery.getCountry('IE')).to.be.equal('Ireland');
        expect(countriesQuery.getCountry('ie')).to.be.equal('Ireland');
        expect(countriesQuery.getCountry('IRL')).to.be.equal('Ireland');
        expect(countriesQuery.getCountry('irl')).to.be.equal('Ireland');
        expect(countriesQuery.getCountry('IN')).to.be.equal('India');
        expect(countriesQuery.getCountry('IND')).to.be.equal('India');
        expect(countriesQuery.getCountry('ALIEN_WORLD')).to.be.equal(error);
    });

    it('convert AlphaCode 2 to AlphaCode 3', () => {
        expect(countriesQuery.convertAlphaCode('IE')).to.be.equal('IRL');
        expect(countriesQuery.convertAlphaCode('ie')).to.be.equal('IRL');
        expect(countriesQuery.convertAlphaCode('IN')).to.be.equal('IND');
        expect(countriesQuery.convertAlphaCode('ALIEN_WORLD')).to.be.equal(error);
    });

    it('convert AlphaCode 3 to AlphaCode 2', () => {
        expect(countriesQuery.convertAlphaCode('IRL')).to.be.equal('IE');
        expect(countriesQuery.convertAlphaCode('irl')).to.be.equal('IE');
        expect(countriesQuery.convertAlphaCode('IND')).to.be.equal('IN');
    });
});