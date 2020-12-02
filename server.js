const express = require('express');
const bodyParser = require('body-parser');
const {
    Sequelize
} = require('sequelize');
const cors = require('cors');

const databaseConnection = require('./config/dbConnection');
const routes = require('./routes/index');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(cors());
app.use('/', routes);
app.use(express.static('uploads'));



const sequelize = new Sequelize("user", 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

databaseConnection(sequelize);

app.listen(3000, () => {
    console.log("app is listing on port http://localhost:3000");
})