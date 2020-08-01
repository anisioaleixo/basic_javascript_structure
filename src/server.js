const express = require('express')
const route = require('./routes')

var helmet = require('helmet');

const PORT = 3333

const app = express()

app.disable('x-powered-by');

app.use(helmet());

app.use(express.json())

app.use(route)

app.listen(PORT, ()=>console.log(`Server http://localhost:${PORT}`))