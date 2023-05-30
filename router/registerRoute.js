
const router = require('express').Router();

// Ambil index.js dari controller dan panggil variabel didalamnya
const registerController = require('../controllers').register;
// Definisikan middleware verify.js
const verifyUser = require('../middleware/verify.js');

// Rute 'http://localhost:5050/register/' digunakan untuk menampilkan form register
router.get('http://localhost:5000/users', verifyUser.isLogout, registerController.formRegister);
// Rute 'http://localhost:5050/register/save' digunakan untuk menyimpan data yang diinput user saat register
router.post('/save', verifyUser.isLogout, registerController.saveRegister);


module.exports = router;