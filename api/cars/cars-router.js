const express = require('express')
const Car = require('./cars-model')
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
} = require('./cars-middleware')

const router = express.Router()

// endpoints
router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.getAll()
    res.json(cars)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkCarId, async (req, res, next) => {
  res.json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
  res.json('postin new car')
})


// router.get('/', (req, res) => {
//   Car.getAll()
//     .then(cars => {
//       res.status(200).json(cars)
//     })
// })

// router.get('/', (req, res) => {
//   Car.getById(req)
//     .then(car => {
//       res.status(200).json(car)
//     })
// })

module.exports = router;









