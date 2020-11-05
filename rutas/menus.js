//PATH = api/menus

const { Router } = require('express');
const { nuevoMenu, listaMenus, updateMenu, deleteMenu } = require('../controladores/menus_controller');

const router = Router();

router.get('/lista', listaMenus);
router.post('/nuevo_menu', nuevoMenu);
router.post('/editar_menu', updateMenu);
router.post('/borrar_menu', deleteMenu);


module.exports = router;