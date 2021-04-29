const Period = require('../models/Period');

module.exports = {
  async store(request, response) {
    const { name } = request.body;


    const period = await Period.create({ name });


    return response.json(period);
  },
  async index(request, response) {
    const periods = await Period.findAll();

    return response.json(periods);
  },
  async delete(request, response) {
    const { periodId } = request.params;

    const period = await Period.findByPk(periodId);

    await period.destroy();

    return response.json(period);
  },
  async update(request, response) {
    const { periodId } = request.params;
    const { name } = request.body;

    const period = await Period.findByPk(periodId);

    period.name = name;

    await period.save();

    return response.json(period);
  }
}