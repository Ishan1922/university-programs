// src/routes/programRoutes.js
const express = require('express');
const programController = require('../controllers/programController');

const router = express.Router();

router.get('/programs', programController.getAllPrograms);
router.get('/programs/:id', programController.getProgramById);
router.post('/programs', programController.createProgram);
router.put('/programs/:id', programController.updateProgram);
router.delete('/programs/:id', programController.deleteProgram);

module.exports = router;
