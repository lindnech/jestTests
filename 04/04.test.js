
const bestesBrot = require('./04'); 

// Definiert den Test mit einer Beschreibung und einer Testfunktion.
test('Das leckereste Brot ist Vollkorn', () => {
    
    // Verwendet die `expect` Funktion von Jest, um den tatsächlichen Wert von `bestesBrot()` zu überprüfen.
    // `.not.toBe` prüft, dass der tatsächliche Wert nicht dem angegebenen Wert entspricht.
    expect(bestesBrot()).not.toBe('Stuten');  
});

// Das hier ist jetzt Test Driven Development, wir haben erst den Test geschrieben,
// jetzt schreiben wir die Funktion, die den Test ausführt.
// Schreibe eine Funktion in 04.js der diesen Test besteht.
// npm run test 04.test.js