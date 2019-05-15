/*
Configurer le module de route
*/
  const express = require('express')
  const router = express.Router()
//

/*
Définition du CRUD
*/

  // Create item: POST
  router.post('/article', (req, res) => {

    /* 
      Pour créer un article il faut une valeur pour :
      - title
      - content
    */


    res.json({ msg: 'Create Article' })
  })
  // Read all item : GET
  router.get('/article', (req, res) => {
    res.json({ msg: 'Read all Article' })
  })

  // Read one item : GET
  router.get('/article/:id', (req, res) => {
    res.json({ msg: 'Read one Article' })
  })

  // Update : PUT
  router.put('/article/:id', (req, res) => {

    /* 
      Pour créer un article il faut une valeur pour :
      - title
      - content
    */

    
    res.json({ msg: 'Update one Article' })
  })

  // Delete one item : DELETE
  router.delete('/article/:id', (req, res) => {
    res.json({ msg: 'Delete one Article' })
  })
//


/*
Exporter le module de route
*/
  module.exports = router
//