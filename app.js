const  controller = require('./controller')
const db = require('./data/database')
const user = require('./data/usermodel')
const express = require('express');
const app = express();

require('dotenv').config()

const cors = require('cors');
app.use(cors());

app.use(express.json());

db.authenticate().then(() => console.log('database run'))
db.sync();

app.post('/signup',controller.signup)
app.get('/jwt',controller.login)
app.post('/forgetPass',controller.forget)
app.get('/reset/:token',controller.resetPass)
app.get('/updatepassword/:token',controller.newPass)
app.listen(3000);