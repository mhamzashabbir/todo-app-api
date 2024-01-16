const express = require('express');
const homeController = require('../controllers/home');


const router = express.Router();

router.get('/tasks', homeController.getTasks);

router.post('/tasks', homeController.postTask);

router.get('/tasks/:id', homeController.getTask);

router.put('/tasks/:id', homeController.putTask);

router.delete('/tasks/:id', homeController.deleteTask);



module.exports = router;
