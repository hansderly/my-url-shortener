const connection = require('../db/db');

module.exports = {
    addUrl: (params) => {

        urlCode = params.urlCode;
        longUrl = params.longUrl;
        shortUrl = params.shortUrl;

        let sqlPersonne = "INSERT INTO url (urlCode, longUrl, shortUrl) VALUES ('" + urlCode + "','" + longUrl + "','" + shortUrl + "')"
        connection.query(sqlPersonne, (err, result) => {
            if (err) throw err;
            idClient = result.insertId;
            console.log('Personne inserted');
        })
    }
}