const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`server running at ${port}`)
});



app.get('/api/restaurants/:restaurantId/overview', function (req, res) {
    let redirectUrl = `http://localhost:8008${req.url}`;
    res.redirect(redirectUrl);
});

app.get('/api/restaurants/:restaurantId/photos', function (req, res) {
    let redirectUrl = `http://localhost:3005${req.url}`;
    res.redirect(redirectUrl);
});

app.get('/api/restaurants/:restaurantId/reviews', function (req, res) {
    let redirectUrl = `http://localhost:1337${req.url}`;
    res.redirect(redirectUrl);
});