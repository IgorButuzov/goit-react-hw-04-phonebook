import { useState } from "react";
import PropsType from 'prop-types';
import style from './ContactsForm.module.css';
import shortid from 'shortid';

const ContactsForm = ({onSubmit}) => {
  const initialState = {
    name: '',
    number: '',
  };

  const [name, setName] = useState(initialState.name);
  const [number, setNumber] = useState(initialState.number);
  
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    onSubmit(contact);

    reset();
  };

  const reset = () => {
    setName(initialState.name);
    setNumber(initialState.number);
  };

    return (
      <form onSubmit={handleSubmit} className={style.form}>
        <label htmlFor={nameInputId} className={style.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </label>
        <label htmlFor={numberInputId} className={style.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            id={numberInputId}
          />
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }


ContactsForm.PropsType = {
  onSubmit: PropsType.func.isRequired,
};

export default ContactsForm;
