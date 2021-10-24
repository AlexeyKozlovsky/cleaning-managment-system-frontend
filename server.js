const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(__dirname + '/public'));
router = express.Router()

app.use('/', router)

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, '/test.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


