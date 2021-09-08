exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', table => {
    table.increments('id')
    table.string('vin', 17).notNullable().unique()
    table.string('make', 128).notNullable()
    table.string('model').notNullable()
    table.integer('milage').unsigned().notNullable()
    table.string('title')
    table.string('transmission')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
