const express = require('express');
const Empresas = require('../models/empresas')

module.exports = {
  async index (request, response) {

    const {seguimento} = request.query;
    

    const empresas = await Empresas.find({
      seguimento:{
        $eq: seguimento, 
       }
    }).sort({"nome":1});
    return response.json(empresas);
  }
}
