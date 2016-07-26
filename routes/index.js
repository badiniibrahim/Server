var cors = require('cors')
module.exports = function(app){
  var corsOptions = {
    origin:'http://localhost:8100',
    credentials :true
  };
app.use(cors(corsOptions));
/*

*/
 
  app.use('/api/users', require('./users')(app));
 
};
