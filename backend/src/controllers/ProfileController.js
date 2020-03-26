const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const ong_id = req.headers.authorization;

    const [count] = await connection('incidents').count('id');

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    res.header('X-Total-Count', count['count(`id`)']);
    return res.json(incidents);
  }
};
