var md5 = require('md5');
module.exports = function(app){
    return function(req, res, next){
        var user = new app.models.User({
            password: md5(req.body.password),
            email:req.body.email,
            nom:req.body.nom,
            prenom:req.body.prenom
        });

        user.save(function(err, instance){
            if (err)
                return res.status(500).send(err);

            res.send(instance);
        });
    }
};
