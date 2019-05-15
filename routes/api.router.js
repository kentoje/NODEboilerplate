/*
Configurer le module de route
*/
  const express = require('express')
  const router = express.Router()
  
//

/* 
Configurer MySQL
*/

  const mysql = require('mysql')
  const connexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    port : 8889,
    database : 'node-boiler-plate'
  })
  connexion.connect()
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

      if ( req.body && req.body.title.length > 0 && req.body.content.length > 0 ) {
        // Définir l'item
        const newItem = { title : req.body.title, content : req.body.content }

        // Enregistre l'item
        connexion.query( `INSERT INTO post SET ?`, newItem, ( err, result, fields ) => {
          if( err ) {
            res.json({ msg: 'Connection failed', data: err })    
          } else {
            res.json({ msg: 'Create Article', data: result })
          }
        } )

        res.json({ msg: 'Create Article', data: req.body })
      } else {
        res.json({ msg: 'No data', data: null })
      }
    //  

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