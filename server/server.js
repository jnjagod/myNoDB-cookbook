require('dotenv').config()
const express = require('express')
const ctrl = require('./controllers/controller')
const app = express()
const {SERVER_PORT} = process.env

app.use(express.json())

app.get('/api/recipes', ctrl.getRecipes)
app.post('/api/recipes', ctrl.createCard)
app.put('/api/recipes/:id', ctrl.updateCard)
app.delete('/api/recipes/:id', ctrl.deleteCard)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} tasty meals served`))