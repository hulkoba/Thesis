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
          chooseRev={this.chooseRev.bind(this)} />
      }

      {editView.isOpen
        ? <FormContainer
          addContact={this.addContact}
          editContact={this.editContact}
          handleCancel={this.toggleEdit.bind(this, null)}
          contact={editView.contact} />

        : <ContactList
          contacts={contacts}
          handleOnEditClick={this.toggleEdit}
          handleOnDeleteClick={this.deleteContact} />
      }
    </div>
  )
}