//PATH = api/promo

const { Router } = require('express');
const { listaPromo, nuevoPromo, updatePromo, deletePromo } = require('../controladores/promo_controller');

const router = Router();

router.get('/lista', listaPromo);
router.post('/nueva_promo', nuevoPromo);
router.post('/editar_promo', updatePromo);
router.post('/borrar_Promo', deletePromo);


module.exports = router;