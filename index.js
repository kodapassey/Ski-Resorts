const express = require('express');
const app = express();
const path = require('path');

const getSkiResortData = require('./public/js/index.js');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', async (req, res) => {
    const resortData = await getSkiResortData()
    res.render(__dirname + '/views/homePage', { resortData });
});


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!')
});