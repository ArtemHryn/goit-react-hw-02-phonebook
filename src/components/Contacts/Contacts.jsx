import {
  ContactList,
  ContactItem,
  Contact,
  DeleteButton,
} from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact>{name}</Contact>: <Contact>{number}</Contact>
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
