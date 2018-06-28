class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = { contact: props.contact }
  }

  handleChange (type, event) {
    let contact = this.state.contact
    if (type === 'name') {
      contact = {...contact, name: event.target.value}
    }
    this.setState(() => ({contact: contact}))
  }

  render () {
    return (
      <form onSubmit={this.props.addOrEditContact(this.state.contact)}>
          <label>Name</label>
          <input
            value={this.state.contact.name}
            onChange={this.handleChange.bind(this, 'name')} />
     
          <button onClick={this.props.handleCancel}>Cancel</button>
          <button type='submit'>Save</button>
      </form>
    )
  }
}
export default ContactForm
