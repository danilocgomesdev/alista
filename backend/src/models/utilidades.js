const mongoose = require('mongoose');


const UtilidadeSchema = new mongoose.Schema({
    orgao: String,
    descricao: [String],
   
});

module.exports = mongoose.model('Utilidades', UtilidadeSchema);