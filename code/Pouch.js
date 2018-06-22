const localDB = new PouchDB('contacts')

localDB.allDocs({ include_docs: true }).then(callback)

localDB.post(contact).then(callback)

localDB.get(contact._id).then(function (doc) {
    doc = {...contact}
    return localDB.put(doc)
  }).then(callback)

localDB.get(contact._id).then(doc => {
    doc._deleted = true
    return localDB.remove(doc)
  }).then(callback)

rows: [
  doc: {
    id: "2018-06-17T13:21:21.247Z",
    name: "Amilia Pond",
    email: "amilia@pond.com",
    phone: "264542",
    type: "cotact",
    _id: "418b4101-a7e8-42d3-921f-610bd3c99048",
    _rev: "1-15ad4a0100684ded8c9b6576dfe840a6"
  },
  id: "418b4101-a7e8-42d3-921f-610bd3c99048",
  key: "418b4101-a7e8-42d3-921f-610bd3c99048",
  value: {
    rev: "1-15ad4a0100684ded8c9b6576dfe840a6"
  }
]