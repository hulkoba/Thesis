const localDB = new PouchDB('contacts')
const remoteDB = new PouchDB('http://localhost:5984/contacts')

localDB.sync(remoteDB, [options])

// get all contacts
localDB.allDocs({ 
  include_docs: true,
  conflicts: true
})

// create a contact
const id = new Date().toISOString()
await localDB.upsert(id, function () {
  return contact
})

// update a contact
await localDB.upsert(contact._id, function (doc) {
  doc = {...contact}
  return doc
})

// remove a contact
await localDB.upsert(contact._id, function (doc) {
  doc._deleted = true
  return doc
})