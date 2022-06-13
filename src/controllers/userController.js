const express = require("express");
const Sequelize = require('sequelize');
const users = require('../models/').users;
const utils = require('../utils/hashpassword');
const jwt = require('jsonwebtoken');

/* obtener datos del usuario por email*/
exports.getUser = async (req, res) => {
    try {
        const user = await users.findOne({
            attributes: ['id', 'name', 'email'],
            where: { email: req.params.email }
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }
};

exports.getUsers = async (req, res) => {
    try {
        const user = await users.findAll({
            attributes: ['id', 'name', 'email']
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }
};