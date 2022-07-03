const express = require('express');
const Users = require('../models/users');

module.exports = { 

  async index (request, response) {
    const user = await Users.find().sort({"nome":1});
    return response.json(user);
  },
    async store (request, response) {
        const { email} = request.body;
        try{
            if (await Users.findOne({ email }))
            return response.status(400).send({error: 'E-mail ja cadastrado!'});

           const user = await Users.create(request.body);
           user.senha = undefined;
            return response.send(user);
        }catch(err) {
            return response.status(400).send({error: 'Falha ao realizar o cadastro!'});
        }
    }
}