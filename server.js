const express = require('express');
const app = express();
const path = require('path');
const port = 3000;




app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dev'));
app.set('view engine', 'pug')

router = express.Router()

app.use('/', router)

app.get('/test', function(req, res) {
    res.render('dev/index', {'pageTitle': 'Главная страница'});
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, '/test.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


