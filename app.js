require('./config/config')
const express = require('express')
const connectDB = require('./config/db')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
connectDB();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes())

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});