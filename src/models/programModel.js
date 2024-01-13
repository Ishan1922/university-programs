// src/models/programModel.js
const pool = require('../config/db');

class ProgramModel {
  static async getAllPrograms() {
    const query = 'SELECT * FROM programs';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  static async getProgramById(id) {
    const query = 'SELECT * FROM programs WHERE id = $1';
    const values = [id];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async createProgram(program) {
    const { name, price, domain, programType, registrations, description, placementAssurance, imageUrl, universityName, facultyProfile, learningHours, duration, certificate, eligibilityCriteria } = program;

    const query = `
      INSERT INTO programs
      (name, price, domain, program_type, registrations, description, placement_assurance, image_url, university_name, faculty_profile, learning_hours, duration, certificate, eligibility_criteria)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *;
    `;

    const values = [name, price, domain, programType, registrations, description, placementAssurance, imageUrl, universityName, facultyProfile, learningHours, duration, certificate, eligibilityCriteria];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async updateProgram(id, program) {
    const { name, price, domain, programType, registrations, description, placementAssurance, imageUrl, universityName, facultyProfile, learningHours, duration, certificate, eligibilityCriteria } = program;

    const query = `
      UPDATE programs
      SET
        name = $1,
        price = $2,
        domain = $3,
        program_type = $4,
        registrations = $5,
        description = $6,
        placement_assurance = $7,
        image_url = $8,
        university_name = $9,
        faculty_profile = $10,
        learning_hours = $11,
        duration = $12,
        certificate = $13,
        eligibility_criteria = $14
      WHERE id = $15
      RETURNING *;
    `;

    const values = [name, price, domain, programType, registrations, description, placementAssurance, imageUrl, universityName, facultyProfile, learningHours, duration, certificate, eligibilityCriteria, id];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async deleteProgram(id) {
    const query = 'DELETE FROM programs WHERE id = $1 RETURNING *;';
    const values = [id];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProgramModel;
