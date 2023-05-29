import { ContactCard } from 'components/ContactCard/ContactCard';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  // const filter = useSelector(getFilter);
  // let normalizedFilter = filter.toLowerCase();
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <List>
      {contacts[0].map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
