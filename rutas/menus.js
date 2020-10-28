//PATH = api/menus

const { Router } = require('express');
const { nuevoMenu, listaMenus } = require('../controladores/menus_controller');

const router = Router();

router.get('/lista', listaMenus);
router.post('/nuevo_menu', nuevoMenu);


module.exports = router;