const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsersSchema = new mongoose.Schema({
    nome:{
         type: String,
         require: true,
    },
    email:{ 
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    senha:{ 
        type: String,
        require: true,
        select: false,
    },
    data:{ 
        type: Date,
        default: Date.now,
    },
    });

    UsersSchema.pre("save", async function(next) {
        const hash = await bcrypt.hash(this.senha, 10);
        this.senha = hash;
        next(); 
            
        });


    module.exports = mongoose.model('Users', UsersSchema);