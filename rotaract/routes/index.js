var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./src/components/ClubPage.js');

router.get('*', function(request, response) {
    var props = { title: 'Universal React' };
    var html = ReactDOMServer.renderToString(
        React.createElement(Component, props)
    );
    response.send(html);
});

module.exports = router;