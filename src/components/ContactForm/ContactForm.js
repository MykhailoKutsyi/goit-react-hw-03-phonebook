import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ id: nanoid(5), name, number });
    this.reset();
  };

  reset = () =>
    this.setState({
      contacts: [],
      name: '',
      number: '',
    });

  nameId = nanoid();
  telId = nanoid();

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={this.telId}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              id={this.telId}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" className={s.submitButton}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
