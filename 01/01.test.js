// Hier importieren wir die "add"-Funktion aus der "add.js"-Datei, um sie in diesem Test verwenden zu können.
const add = require('./add');

// Der "test"-Befehl ist eine von Jest bereitgestellte Funktion, mit der Sie einen Test definieren können.
// Der erste Parameter ist eine Beschreibung dessen, was der Test tun soll.
// Der zweite Parameter ist eine Callback-Funktion, die den eigentlichen Testcode enthält.
test('should correctly add two numbers', () => {
    // "expect" ist eine Funktion von Jest, mit der Sie einen Wert definieren können, den Sie überprüfen möchten.
    // ".toBe" ist ein "Matcher", der überprüft, ob der erwartete Wert dem tatsächlichen Wert entspricht.
    expect(add(2, 3)).toBe(5);  // Dieser Test wird fehlschlagen, da die Funktion "add" die Zahlen subtrahiert statt sie zu addieren.
});

// Führe Jest aus: einmalig "npm install", dann testen mit "npm run test 01.test.js"
//  Die Aufgabe ist geschafft, wenn der Test fehlerfrei läuft.