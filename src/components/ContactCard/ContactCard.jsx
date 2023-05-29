import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Card } from './ContactCard.styled';
import { deleteContact } from '../../redux/contacts/contactsSlice';

export const ContactCard = ({ contact: { name, phone, id } }) => {
  // console.log({ name, phone, id });
  const dispatch = useDispatch();
  return (
    <Card>
      <p>{name}</p> :<p>{phone}</p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </Card>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
