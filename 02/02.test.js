const square = require('./square');

test('should square the number correctly', () => {
    const result = square(...);
    if (result !== ...) {
        throw new Error(`Expected 16, but got ${result}`);
    }
});

// Der test hat einige Lücken, fülle .... mit einem richtigen Test und lasse Jest laufen mit: "npm run test 02.test.js"
// Die Aufgabe ist geschafft, wenn Square.js und 02.test.js beides fehlerfrei ist.