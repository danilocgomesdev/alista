const mongoose = require('mongoose');
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const EmpresaSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    descricao: String,
    fone: String,
    email: String,
    whatsapp: String,
    seguimento: String,
    foto: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },

});

EmpresaSchema.pre("remove", function() {
    return promisify(fs.unlink)(
        path.resolve(__dirname, "..", "..", "tmp", "uploads", this.foto));
    });

module.exports = mongoose.model('Empresas', EmpresaSchema);