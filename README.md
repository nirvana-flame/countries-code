# countries-code

Data fetched from https://unstats.un.org/unsd/methodology/m49/ (UN)
and from Wikipedia

List of countries:
With country object containing Alpha-2 code (e.g.`IE`), Alpha-3 code (e.g. `IRL`), and Number codes.

## Example

```js
import { countriesQuery } from "countries-code";

console.log(countriesQuery.allCountriesList());
//[....,
// {
//    "country_name_en": "Ireland",
//    "country_name_fr": "Irlande (l')",
//    "alpha2": "IE",
//    "alpha3": "IRL",
//    "number": "372"
//},....]
```

```js
var countriesQuery = require("countries-code");

console.log(countriesQuery.allCountriesList());
//[....,
// {
//    "country_name_en": "Ireland",
//    "country_name_fr": "Irlande (l')",
//    "alpha2": "IE",
//    "alpha3": "IRL",
//    "number": "372"
//},.
```
