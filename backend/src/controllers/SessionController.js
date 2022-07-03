const express = require('express');
const Users = require('../models/users');
const bcrypt = require('bcryptjs');

module.exports = { 
  async store (request, response) {
  const { email , senha} = request.body;
     const user = await Users.findOne({ email }).select('+senha');

     if(!user)
     return response.status(400).send({error: 'E-mail não cadastrado!'});

     if(!await bcrypt.compare(senha, user.senha))
     return response.status(400).send({error: 'Senha inválida'});

     user.senha = undefined;

      return response.send(user);
  
}
}