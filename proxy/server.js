const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/restaurants/:restaurantId', express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`server running at ${port}`)
});


app.get('/api/restaurants/:restaurantId/overview', function (req, res) {
    let redirectUrl = `http://54.90.99.87/api/restaurants/${req.params.restaurantId}/overview`;
    res.redirect(redirectUrl);
});

app.get('/api/restaurants/:restaurantId/photos', function (req, res) {
    let redirectUrl = `http://droptablephotos-dev.us-west-1.elasticbeanstalk.com/api/restaurants/${req.params.restaurantId}/photos`;
    res.redirect(redirectUrl);
});

app.get('/api/restaurants/:restaurantId/reviews', function (req, res) {
    let redirectUrl = `http://54.193.65.0:1337/api/restaurants/${req.params.restaurantId}/reviews`;
    res.redirect(redirectUrl);
});

