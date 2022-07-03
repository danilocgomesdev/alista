const express = require('express');
const Empresas = require('../models/empresas');
const Users = require('../models/users');
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

module.exports = {
  async index (request, response) {

    const { page = 1 } = request.query;

    const count = await Empresas.count({}, function(err, count) {
    return count;
});
    

    const empresas = await Empresas.find()
    .sort({"nome":1})
    .limit(10)
    .skip((page - 1) * 10);


    response.header('X-Total-Count', count);
    return response.json(empresas);
  },

  async store (request, response) {
    const { filename } = request.file;
    const { nome, endereco, descricao, fone, email, whatsapp, seguimento, foto} = request.body;
    const {user_id } = request.headers;

    const user = await Users.findById(user_id);
    
    if (!user){
      response.status(400).send({error: 'Usuário não cadastrado!'});
    }
    let empresa = await Empresas.findOne({ nome });
    if(!empresa) {
      const empresa = await Empresas.create({
        nome, 
        endereco, 
        descricao, 
        fone, 
        email, 
        whatsapp, 
        seguimento,
        foto:  filename,
        user: user_id,
      })
      
      return response.json(empresa);
    } else {return response.status(400).send({error: 'Empresa ja cadastrada!'});}
     
  },
    
  async destroy (request, response) {
    const {user_id } = request.headers;
    const user = await Users.findById(user_id);
      if (!user){
      response.status(400).send({error: 'Usuário não cadastrado!'});
     } else{
          const post = await Empresas.findById(request.params.id);
          await post.remove();
          return response.json({menssagem: 'Apagado com Sucesso'});
  }}
}