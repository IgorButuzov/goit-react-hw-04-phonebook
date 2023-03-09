import { useState, useEffect } from 'react';
import ContactsForm from './components/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import Container from './components/Container';
import Filter from './components/Filter/Filter';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterChange = event => setFilter(event.currentTarget.value);

  const addContact = contact => {
    if (!hasContacts(contact.name)) {
      setContacts(contacts => [contact, ...contacts]);
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  const hasContacts = name => {
    return contacts.find(contact => 
      contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
  };

  const findContact = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    if (filter.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    } else {
      return contacts;
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  
    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactsForm onSubmit={addContact} />

        <div>
          <h2>Contacts</h2>
          <Filter 
          value={filter} 
          onChange={filterChange} 
          />
          <ContactsList
            findContact={findContact}
            onDeleteContact={deleteContact}
          />
        </div>
      </Container>
    );
}

export default App;
