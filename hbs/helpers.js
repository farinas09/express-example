const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    let words = text.split(' ');
    words.forEach((palabra, index) => {
        words[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });
    return words.join(' ');
});