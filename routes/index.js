var express = require('express');
var router = express.Router();

/*  home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
/*  about me page. */
router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About' });
});
/*  project page. */
router.get('/project', function(req, res, next) {
    res.render('index', { title: 'Project' });
});
/*  contact page. */
router.get('/contact', function(req, res, next) {
    res.render('index', { title: 'Contact' });
});

module.exports = router;