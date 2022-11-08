const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand'];
const countriesStartingWithN = [];
for (let i = 0; i < countries.length; i++) {
  let country = countries[i];
  if (country.startsWith('N')) {
    countriesStartingWithN.push(country);
  }
}
// console.log(countriesStartingWithN)

// const countriesStartingWithN2 = [];
// countries.filter(country => {
//     if (country.startsWith('N')) {
//         countriesStartingWithN2.push(country);
//     }
// });
const countriesStartingWithN2 = countries.filter(country => country.startsWith('N'));
console.log(countriesStartingWithN2)