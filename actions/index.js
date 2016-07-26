module.exports = function(app){
    app.actions = {};
    app.actions.users = require('./users')(app);
    app.actions.auth = require('./auth')(app);
    

};
