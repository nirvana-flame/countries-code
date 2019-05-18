# countries-code [![Known Vulnerabilities](https://snyk.io/test/github/nirvana-flame/countries-code/badge.svg?targetFile=package.json)](https://snyk.io/test/github/nirvana-flame/countries-code?targetFile=package.json)

Data fetched from https://unstats.un.org/unsd/methodology/m49/ (UN)
and from Wikipedia

List of countries:
With country object containing Alpha-2 code (e.g.`IE`), Alpha-3 code (e.g. `IRL`), and Number codes.

## Example

```js
const countriesQuery = require("countries-code");

console.log(countriesQuery.allCountriesList());
/*
[....,
 {
    "country_name_en": "Ireland",
    "country_name_fr": "Irlande (l')",
    "alpha2": "IE",
    "alpha3": "IRL",
    "number": "372"
},...] 
*/
console.log(countriesQuery.getAllAlphaTwoCodes());
// ["AF",.....]
console.log(countriesQuery.getAllAlphaThreeCodes());
// ["AFG",.....]

// Use getCountry to get country name by alpha code-2 or 3
console.log(countriesQuery.getCountry("IE"));
// "Ireland"
console.log(countriesQuery.getCountry("IRL"));
// "Ireland"

// Use convertAlphaCode to convert alpha code-2 to 3 or vice versa
console.log(countriesQuery.convertAlphaCode("IE"));
// "IRL"
console.log(countriesQuery.convertAlphaCode("IRL"));
// "IE"
```

```js
import { countriesQuery } from "countries-code";

console.log(countriesQuery.allCountriesList());
/*
[....,
 {
    "country_name_en": "Ireland",
    "country_name_fr": "Irlande (l')",
    "alpha2": "IE",
    "alpha3": "IRL",
    "number": "372"
},...] 
*/
console.log(countriesQuery.getAllAlphaTwoCodes());
// ["AF",.....]
console.log(countriesQuery.getAllAlphaThreeCodes());
// ["AFG",.....]

// Use getCountry to get country name by alpha code-2 or 3
console.log(countriesQuery.getCountry("IE"));
// "Ireland"
console.log(countriesQuery.getCountry("IRL"));
// "Ireland"

// Use convertAlphaCode to convert alpha code-2 to 3 or vice versa
console.log(countriesQuery.convertAlphaCode("IE"));
// "IRL"
console.log(countriesQuery.convertAlphaCode("IRL"));
// "IE"
```
