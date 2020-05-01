const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
    },
    rg: {
        type: String,
    },
    cnh: {
        type: String,
    },
    phone: {
        type: String,
    },
    is_owner: {
        type: Boolean
    },
    lote: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lote'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}); 

UserSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema);

module.exports = User;