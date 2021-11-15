const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor

const infoWeb = require('./controllers/infoWeb')

// GET http://localhost:3000/
app.get('/', infoWeb.getInfoHome);

// GET http://localhost:3000/about
app.get('/about', infoWeb.getInfoAbout);

// GET http://localhost:3000/location
app.get('/location', infoWeb.getInfoLocation);

// GET http://localhost:3000/mission
app.get('/mission', infoWeb.getInfoMission);

// GET http://localhost:3000/contact
app.get('/contact', infoWeb.getInfoContact);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })