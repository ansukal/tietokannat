const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Luo tietokantayhteys
const db = new sqlite3.Database('esimerkkitietokanta.db');

// Luo taulu, jos se ei ole jo olemassa
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS esimerkit (id INTEGER PRIMARY KEY, nimi TEXT, kuvaus TEXT)");
});

// Hae esimerkit tietokannasta
app.get('/esimerkit', (req, res) => {
    db.all("SELECT * FROM esimerkit", (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

// Lisää esimerkki tietokantaan
app.post('/esimerkit', (req, res) => {
    const { nimi, kuvaus } = req.body;
    db.run("INSERT INTO esimerkit (nimi, kuvaus) VALUES (?, ?)", [nimi, kuvaus], function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(`Lisätty esimerkki ID:llä ${this.lastID}`);
        }
    });
});

// Kuuntele porttia
app.listen(port, () => {
    console.log(`Sovellus on käynnissä osoitteessa http://localhost:${port}`);
});
