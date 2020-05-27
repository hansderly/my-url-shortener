const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set view engine , body parser and the public folder
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes/url'));

app.get('/', (req, res) => {
    res.render('index');
})

const PORT = 8080;
app.listen(PORT, () => {
	console.log(`Server started on PORT ${PORT}`);
});
