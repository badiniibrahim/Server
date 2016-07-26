var mongoose = require('mongoose');

module.exports = function(app){
    app.mongoose = mongoose.connect(app.settings.db);

    app.models = {};
    app.models.User = require('./User')(app);
 

};
