const localDB = new PouchDB('contacts')
const remoteDB = new PouchDB('http://localhost:5984/contacts')

localDB.sync(remoteDB, [options])

// create a contact
localDB.put({
  ...contact,
  _id: new Date().toISOString()
})
// update a contact
localDB.get(contact._id).then(function (doc) {
  doc = {...contact}
  return localDB.put(doc)
})
// get all contacts
localDB.allDocs({ 
  include_docs: true,
  conflicts: true
})
// remove a contact
localDB.remove(contact)