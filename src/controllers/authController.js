const users = require('../models').users;
const jwt = require('jsonwebtoken');
const config = require('../configs/config');
const utils = require('../utils/hashpassword');

/* registro */
exports.signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const emailUser = await users.findOne({ email });
        if (emailUser) {
            return res.status(200).send('Email ya registrado');
        } else {
            passwordHash = await utils.hashedPassword(password);
            users.create({
                name,
                email,
                password: passwordHash
            }).then(user => {
                const token = jwt.sign({ name: user.name, email: user.email }, config.secretKey, { expiresIn: '24 hours' });
                return res.status(200).json({ token });
            }).catch(error => res.status(400).send(error));

        }
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }
};

/* ingresar */
exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await users.findOne({ where: {email} });
        if (user) {
            const match = await utils.comparePassword(password, user.password);
            if (match) {
                const token = jwt.sign({ name: user.name, email: user.email }, config.secretKey, { expiresIn: '24 hours' });
                return res.status(200).json({ token });
            } else {
                return res.status(403).send('Contraseña erronea');
            }
        } else {
            return res.status(401).send('Usuario no existe');
        }
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }
};