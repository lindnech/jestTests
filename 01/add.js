// Diese Funktion soll zwei Zahlen addieren, enthält jedoch einen Fehler.
function add(a, b) {
    return a - b;  // Hier ist der Fehler: Es sollte "+" statt "-" sein.
}

module.exports = add; 
// Hier exportieren wir die Funktion "add", damit wir sie in anderen Dateien, z.B. in unseren Testdateien, verwenden können.