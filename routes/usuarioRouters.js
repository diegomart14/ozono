const usuarioController = require('../controllers/usuarioController');

module.exports = (router) => {
    //rutas del recurso usuario

    //router.post('./usuario', usuarioController.add);

    router.post('/users', usuarioController.add);
    router.get('/users', usuarioController.list);
    router.get('/users/:id', usuarioController.show);
    router.put('/users/:id', usuarioController.update);
    router.delete('/users/:id', usuarioController.delete);

    return router;
};