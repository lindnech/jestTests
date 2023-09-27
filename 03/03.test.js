
const isEven = require('./03');  

test('should return true for even numbers and false for odd numbers', () => {
    
    // `expect` ist eine Funktion von Jest, die einen Wert definiert, den Sie überprüfen möchten.
    expect(isEven(2)).toBe(true);  // `` vergleicht den tatsächlichen Wert (links) mit dem erwarteten Wert (rechts).
    
    ... //Hier dein Code: Überprüfe die Funktion mit einer ungeraden Zahl.
});

// Fülle die Lücke und überprüfe die Funktion mit einer ungeraden Zahl.
// npm run test 03.test.js