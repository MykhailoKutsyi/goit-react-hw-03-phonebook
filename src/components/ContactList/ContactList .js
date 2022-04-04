import PropTypes from 'prop-types';
import s from './ContactList.module.css';
const AddContacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <div>
              <p>{name}</p>
              <p>{number}</p>
            </div>
            <button
              onClick={() => onDeleteContact(id)}
              className={s.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

AddContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default AddContacts;
