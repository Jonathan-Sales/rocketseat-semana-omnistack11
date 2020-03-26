const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('incidents').count('id');

    const incidents = await connection('incidents')
      .limit(5)
      .offset((page - 1) * 5)
      .join('ongs', 'incidents.ong_id', '=', 'ongs.id')
      .select(
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      );

    res.header('X-Total-Count', count['count(`id`)']);
    return res.json(incidents);
  },

  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const ong = await connection('ongs')
      .where('id', ong_id)
      .select();
    if (!ong) {
      return res.status(401).json({ error: 'ONG not registered' });
    }

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted' });
    }

    await connection('incidents')
      .where('id', id)
      .del();

    return res.status(204).send();
  }
};
