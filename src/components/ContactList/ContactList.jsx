import { ContactCard } from 'components/ContactCard/ContactCard';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
