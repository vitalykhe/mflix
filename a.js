stringToArray = (str) => {
    const regex = /\w+[?\s?\w+]+/gm;
    let m;
    let arr = [];

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach(match => arr.push(match));
    }
    return arr;
}


let countries = `Russia, France; Belgium, New Zeland. Россия, Новая зеландия`;

let countriesArray = Array.isArray(countries) ? countries : countries.split(/\;|\.|,/g).map(c => c.trim());
console.log(countriesArray, typeof countriesArray);