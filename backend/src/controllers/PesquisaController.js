const express = require('express');
const Empresas = require('../models/empresas')

module.exports = {
  async index (request, response) {

    const {nome} = request.query;
    

    const empresas = await Empresas.find({
      nome:{
        $regex: nome, 
        $options: '-i'
      }
    }).sort({"nome":1});
    return response.json(empresas);
  }
}
