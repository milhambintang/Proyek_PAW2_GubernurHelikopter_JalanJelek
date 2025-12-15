const mongoose = require('mongoose');

const pegawaiSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  nip: { type: String, required: true, unique: true },
  tempat_lahir: String,
  tanggal_lahir: Date,
  jenis_kelamin: String,
  alamat: String,
  no_telepon: String,
  email: String,
  jabatan: String,
  tanggal_masuk: Date,
  status: String
});

module.exports = mongoose.model('Pegawai', pegawaiSchema);