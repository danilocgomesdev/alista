const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const EmpresaController = require('./controllers/EmpresaController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const UtilidadesController = require('./controllers/UtilidadesController');
const PesquisaController = require('./controllers/PesquisaController');
const SeguimentoController = require('./controllers/SeguimentoController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/empresas',  upload.single('foto'), EmpresaController.store);
routes.get('/empresas', EmpresaController.index);
routes.delete('/empresas/:id', EmpresaController.destroy);

routes.post('/users/cadastro', UserController.store);
routes.get('/users/lista', UserController.index);

routes.post('/login', SessionController.store);

routes.post('/utilidades', UtilidadesController.store);

routes.get('/pesquisa', PesquisaController.index);
routes.get('/seguimento', SeguimentoController.index);

module.exports = routes;