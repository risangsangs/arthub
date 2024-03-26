const mongoose = require('mongoose')

// field status = hadir || terlambat || izin || sakit || alpha

const EventSchema = new mongoose.Schema({
    idUser: {
        type: String
    },
    title: {
        type: String,
        required: [true, 'Silahkan isikan Title'],
    },
    lokasi:{
        type: String,
        require: [true, 'Silahkan isikan lokasi'],
    },
    date:{
        type: Date,
        require: [true, 'Silahkan isikan Tanggal Event'],
    },
    desc:{
        type: String,
        require: [true, 'Silahkan isikan deskripsi event'],
    },
    price:{
        type: String,
        require: [true, 'Silahkan isikan harga tiket event']
    },
    category:{
        type: String,
        require: [true, 'Silahkan isikan category']
    },
    view: {
        type: Number
    },
    buying: {
        type: Number
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Events', EventSchema)