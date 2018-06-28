const localDB = new PouchDB('contacts')
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




// rows: [
//   doc: {
//     id: "2018-06-17T13:21:21.247Z",
//     name: "Amilia Pond",
//     email: "amilia@pond.com",
//     phone: "264542",
//     type: "cotact",
//     _id: "418b4101-a7e8-42d3-921f-610bd3c99048",
//     _rev: "1-15ad4a0100684ded8c9b6576dfe840a6"
//   },
//   id: "418b4101-a7e8-42d3-921f-610bd3c99048",
//   key: "418b4101-a7e8-42d3-921f-610bd3c99048",
//   value: {
//     rev: "1-15ad4a0100684ded8c9b6576dfe840a6"
//   }
// ]

const remoteDB = new PouchDB('http://localhost:5984/contacts')
localDB.sync(remoteDB, [options])