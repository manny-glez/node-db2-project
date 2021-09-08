// STRETCH
const cars = [
  {
    vin: '11111111111111111',
    make: 'toyota',
    model: 'prius',
    milage: 215000,
    title: 'clean',
    transmission: 'manual'
  },
  {
    vin: '22222222222222222',
    make: 'toyota',
    model: 'corolla',
    milage: 115000,
    title: 'salvage'
  },
  {
    vin: '33333333333333333',
    make: 'ford',
    model: 'focus',
    milage: 15000
  },
]

// exports.seed = function(knex) {
//   return knex('cars')
//     .truncate().then(() => {
//       return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}