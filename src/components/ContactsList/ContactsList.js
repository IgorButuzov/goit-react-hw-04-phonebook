import ContactItem from './ContactsListItem';
import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

const ContactsList = ({ findContact, onDeleteContact }) => {
  return (
    <ul className={style.contactList}>
      {findContact().map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.prototype = {
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
