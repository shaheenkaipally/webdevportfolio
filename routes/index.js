var express = require('express');
var router = express.Router();


/*  home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Homes' });
});
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
/*  about me page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About' });
});
/*  project page. */
router.get('/project', function(req, res, next) {
    res.render('about', { title: 'Project' });
});
/*  contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;