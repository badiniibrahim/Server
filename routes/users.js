var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    router.post('/',
        bodyparser,
        app.actions.users.create
    );

    return router;
};
