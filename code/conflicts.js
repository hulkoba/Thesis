async getPouchDocs () {
  const completeContacts = await localDB.allDocs({
    include_docs: true,
    conflicts: true
  })
  const contacts = completeContacts.rows.map(c => c.doc)
  const conflictedContact = contacts.find(contact => contact._conflicts)

  if (conflictedContact) {
    this.getConflictRevisions(conflictedContact)
  }
}

async getConflictRevisions (conflictedContact) {
  let contactMe, contactYou
  
  if (equals(conflictedContact, this.state.lastEditedContact)) {
    contactMe = conflictedContact

    // To fetch the losing revision, simply get() it using the rev option
    contactYou = await localDB.get(conflictedContact._id, {
      rev: conflictedContact._conflicts[0]
    })
  } else {
    contactYou = conflictedContact
    contactMe = await localDB.get(conflictedContact._id, {
      rev: conflictedContact._conflicts[0]
    })
  }

  this.setState({
    modalView: {
      hasConflict: true, // open the modal
      contactMe,
      contactYou
    }
  })
}

// remove the losing revision
async chooseRev (contact) {
  await localDB.remove(contact._id, contact._rev)
}