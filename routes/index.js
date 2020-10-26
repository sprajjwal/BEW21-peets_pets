const Pet = require('../models/pet');

module.exports = (app) => {

  /* GET home page. */
  app.get('/', (req, res) => {
    Pet.find().exec((err, pets) => {
      console.log(pets)
      res.render('pets-index', { pets: pets });    
    });
  });
}
