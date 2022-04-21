import s from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <li className={s.item}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button
          onClick={() => onDeleteContact(name)}
          className={s.deleteButton}
        >
          Delete
        </button>
      </li>
    </>
  );
};
export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
