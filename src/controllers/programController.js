// src/controllers/programController.js
const ProgramModel = require('../models/programModel');

async function getAllPrograms(req, res) {
  try {
    const programs = await ProgramModel.getAllPrograms();
    res.json(programs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function getProgramById(req, res) {
  const { id } = req.params;

  try {
    const program = await ProgramModel.getProgramById(id);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.json(program);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function createProgram(req, res) {
  const program = req.body;

  try {
    const newProgram = await ProgramModel.createProgram(program);
    res.status(201).json(newProgram);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function updateProgram(req, res) {
  const { id } = req.params;
  const program = req.body;

  try {
    const updatedProgram = await ProgramModel.updateProgram(id, program);

    if (!updatedProgram) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.json(updatedProgram);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function deleteProgram(req, res) {
  const { id } = req.params;

  try {
    const deletedProgram = await ProgramModel.deleteProgram(id);

    if (!deletedProgram) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.json(deletedProgram);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
};
