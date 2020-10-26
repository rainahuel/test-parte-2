const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.newUser = (req, res) => {

    const { name, email, password } = req.body

    let user = new User({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 5)
    })
    user.save( (err, userSave ) => {
        userSave.password = ';)'
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'Error al guardar usuario',
                errors: err
            })
        }
        res.status(201).json({
            ok: true,
            message: 'usuario agregado correctamente'
        })
    })
} 
