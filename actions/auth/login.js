var md5 = require('md5');
module.exports = function(app){
    return function(req, res, next){
      console.log("before : "+ req.body.password + " after : "+md5(req.body.password));
      req.body.password = md5(req.body.password);
        app.models.User.findOne({
            email: req.body.email,
            password: req.body.password
        }, function(err, instance){
            if(err)
                return res.status(500).send(err);

            if(!instance)
                return res.status(404).send('account not found.');

            req.session.userId = instance.id;
            res.send(instance);
        })
    };
};
