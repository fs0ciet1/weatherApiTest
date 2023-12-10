// Importa il modulo 'express' e crea un'app Express
const express = require('express');
const app = express();

const https = require("https");

//const valueApi = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_1dvAmE8kkrzjkEbD0Juko89egIBRQEyJ9XpwcZLp";
const weatherApi = 'https://samples.openweathermap.org/data/2.5/forecast?q=&appid=b1b15e88fa797225412429c1c50c122a1';

app.get('/', (req, res) => {

    //effettua richiesta https all'api
    https.get(weatherApi, function(request)
    {
        var data = '';
        //gestisce i dati ricevuti
        request.on('data' , (chunk) =>
        {
            data += chunk; 
        });

        //una volta ricevuti i dati
        request.on ("end", ()=>
        {
            const weatherData = JSON.parse(data);
            //uso depth per vedere tutti i livelli dell'oggetto
            console.dir(weatherData, { depth: null });
            res.send(weatherData);

        });
    });
});
app.listen(8080);