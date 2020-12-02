const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const CategoryController = require('./controllers/categoryController');
const models = require('./models');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(cors());

models.sequelize.sync().then((res) => {
    console.log("Database is connected successfully");
}).catch((err) => {
    console.log("Database is disconnected with error", err);
});

app.use(express.static('uploads'));


app.post('/category', CategoryController.create);



app.listen(3000, () => {
    console.log("app is listing on port http://localhost:3000");
})