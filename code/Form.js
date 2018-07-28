class FormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contact: props.contact
    }
  }

  handleChange (event) {
    let contact = this.state.contact
    contact = {...contact, name: event.target.value}
    this.setState(() => ({contact: contact}))
  }

  render () {
    return (
      <ContactForm
        handleChange={this.handleChange}
        contact={this.state.contact} />
    )
  }
}

const ContactForm = ({contact, handleChange}) => (
  <form className='contact-form'>
    <label>Name</label>
    <input
      value={contact.name}
      onChange={this.handleChange.bind(this)} />
  </form>
)