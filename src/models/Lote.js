const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const LoteSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    has_owner: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

LoteSchema.plugin(mongoosePaginate);

const Lote = mongoose.model('Lote', LoteSchema);
module.exports = Lote;