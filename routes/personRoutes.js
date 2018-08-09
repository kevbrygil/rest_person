import Router from 'express';
import PersonController from '../controllers/person';

const personRoutes = (app) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            PersonController.get(req, res);
        })
        .get('/:cuid', (req, res) => {
            PersonController.getById(req,res);
        })
        .post('/', (req, res) => {
            PersonController.add(req, res);
        })
        .put('/:cuid', (req, res) => {
            PersonController.update(req, res);
        })
        .delete('/:cuid', (req, res) => {
            PersonController.inactivate(req, res);
        });

    app.use('/person', router);
};

module.exports = personRoutes;
