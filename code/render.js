render () {
  const { contacts, editView, modalView } = this.state
  return (
    <div>
      <Header
        isOpen={editView.isOpen}
        handleGoToEdit={this.toggleEdit.bind(this, null)} />

      {modalView.hasConflict &&
        <Modal
          contactMe={modalView.contactMe}
          contactYou={modalView.contactYou}
          removeRev={this.removeRev.bind(this)} />
      }

      <Contacts
        isOpen={editView.isOpen}
        toggleEdit={this.toggleEdit}
        addContact={this.addContact}
        editContact={this.editContact}
        deleteContact={this.deleteContact}
        contact={editView.contact}
        contacts={contacts} />
    </div>
  )}




render () {
const {
  isOpen, toggleEdit, addContact, editContact, deleteContact, contact, contacts
} = this.props

return(
  isOpen
    ? <FormContainer
      addContact={addContact}
      editContact={editContact}
      handleCancel={toggleEdit.bind(this, null)}
      contact={contact}
    />

    : <ContactList
      contacts={contacts}
      handleOnEditClick={toggleEdit}
      handleOnDeleteClick={deleteContact}
    />
)}