import React, { Component } from 'react';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            {contact.name} - {contact.number}
            <button
              className={css.deleteButton}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
