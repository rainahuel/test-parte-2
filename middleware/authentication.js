const SEED = require('../config/config').SEED
const jwt = require('jsonwebtoken');

exports.checkToken = (req, res, next) => {

    let token = req.query.token;

    jwt.verify(token, SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false, 
                message: 'token invalido',
                errors: err
            })
        }
        req.user = decoded.user;
        next();
    })

} 