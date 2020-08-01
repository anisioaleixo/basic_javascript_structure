const express = require('express')
const route = require('./routes')

const PORT = 3333

const app = express()

app.use(express.json())

app.use(route)

app.listen(PORT, ()=>console.log(`Server http://localhost:${PORT}`))