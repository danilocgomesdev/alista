const express = require('express');
const Utilidades = require('../models/utilidades');
const Users = require('../models/users');

module.exports = { 

  async index (request, response) {
    const utilidades = await Utilidades.find().sort({"orgao":1});
    return response.json(utilidades);
  },
      async store (request, response) {
      const { orgao , descricao } = request.body;
      const {user_id } = request.headers;
      const user = await Users.findById(user_id);
    
    if (!user){
      response.status(400).send({error: 'Usuário não cadastrado!'});
    }
        try{
            if (await Utilidades.findOne({ orgao }))
            return response.status(400).send({error: 'Orgao ja cadastrado!'});
            const utilidades = await Utilidades.create({
              orgao,
              descricao: descricao.split(',').map(descricao => descricao.trim()),
              });
            return response.send(utilidades);
        }catch(err) {
            return response.status(400).send({error: 'Falha ao realizar o cadastro!'});
        }
    }
}