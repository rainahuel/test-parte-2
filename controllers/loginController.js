const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SEED = require('../config/config').SEED;
const bcrypt = require('bcrypt');

exports.login = (req, res) => {

    const { email, password } = req.body;

    User.findOne({email: email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'error al buscar usuario',
                errors: err
            });
        }
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                mensaje: 'credenciales incorrectas',
                errors: err
            });
        }
        if (!bcrypt.compareSync( password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                mensaje: 'credenciales incorrectas',
                errors: err
            });
        }
        
        usuarioDB.password = '?'
        let token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: 60 });
        res.status(200).json({
            ok: true,
            data: usuarioDB,
            token,
            id: usuarioDB._id
        })
    })
}