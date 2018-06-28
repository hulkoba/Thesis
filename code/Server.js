const fs = require('fs')
const contacts = require('./contacts.json')

app.post('/contacts', function (req, res) {
  let contact = req.body.contact
  if (!contact || typeof contact === 'undefined') {
    res.status(400).send({ msg: 'contact malformed.' })
  } else {
      // persist contact
      contacts.push(contact)
      fs.writeFile('utils/contacts.json', contacts, 'utf8', function (err) {
        if (err) {
          res.status(500).send({msg: 'failed to write file'})
          throw err
        }
        res.json(contact).send()
      })
  }
})
