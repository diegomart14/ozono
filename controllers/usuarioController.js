const { Users } = require('../models');

//Agregar  Usuario
exports.add = async (request, response, next) => {
    try {
    const users = await Users.create(request.body);
    
    response.json({ 
        message: 'El usuario se registro', 
        users
    });
    } catch (error) {
        //console.log(error);
        let errores = [];
        if (error.errors) {
            errores = error.errors.map(errorItem => ({
                campo: errorItem.path,
                error: errorItem.message,
            }));
        }

        response.status(503).json({ error: true,message: 'Error al agregar usuario',errores,});
    }
};

//listar usuario
exports.list = async(req, res, next) => {
    try {
        //extraer la lista de usuarios
        const users = await Users.findAll({});
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(503).json({ mensaje: 'Error al leer el usuario'});
    }
};

//mostrar / leer / id
exports.show = async(req, res, next) => {
    try {
        //Buscar el registro, por id
        const users = await Users.findByPk(req.params.id);
        if (!users) {
            res.status(404).json({ mensaje: 'No se encontro el usuario. '});
        } else {
            res.json(users);
        }
    } catch (error) {
        console.log(error);
        response.status(503).json({ mensaje: 'Error al leer el usuario'});
    }
};

//Actualizar
exports.update = async(req, res, next) => {
    try {
        //Obtener el registro de la categoria desde la bd
        const users = await Users.findByPk(req.params.id);
        if (!users) {
            res.status(404).json({ mensaje: 'No se encontro el usuario. '});
        } else {
            /*actualizar la bd
            categorias.nombre = req.body.nombre;
            categorias.activo = req.body.activo;
            el resto de las propiedades
            Procesar las propiedades que vienen en el body*/

            Object.keys(req.body).forEach((propiedad) => {
                users[propiedad] = req.body[propiedad];
            })

            //guardar los cambios
            await users.save();
            res.json({ mensaje: 'El registro fue actualizado'});
        }
    } catch (error) {
        console.error(error);
        let errores = [];
        if (error.errores) {
            errores = error.errores.map((item) => ({
                campo: item.path,
                error: item.message,
            }));
        }
        res.json({ 
            error: true,
            message: 'Error al actualizar la usuario',
            errores,
        });
    }
};
//Eliminar usuario
exports.delete = async(req, res, next) => {
    try {
        //Eliminar registro, por id
        const users = await Users.findByPk(req.params.id);
        if (!users) {
            res.status(404).json({ mensaje: 'No se encontro el usuario. '});
        } else {
            await users.destroy();
            res.json({ mensaje: 'Se elimino el usuario. '});
        }
    } catch (error) {
        res.status(503).json({ mensaje: 'Error al eliminar el usuarios.'});
    }
};