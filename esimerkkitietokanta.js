const sqlite3 = require('sqlite3').verbose();

// Määritä tietokannan tiedostonimi
const dbFile = 'esimerkkitietokanta.db';

// Avaa yhteys olemassa olevaan tietokantaan
const db = new sqlite3.Database(dbFile);

// Luo taulu, jos se ei ole jo olemassa
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS esimerkit (id INTEGER PRIMARY KEY, nimi TEXT, kuvaus TEXT)");
});

// Sulje tietokantayhteys
db.close((err) => {
    if (err) {
        console.error('Virhe tietokantayhteyden sulkemisessa:', err.message);
    } else {
        console.log('Tietokantayhteys suljettu onnistuneesti.');
    }
});
