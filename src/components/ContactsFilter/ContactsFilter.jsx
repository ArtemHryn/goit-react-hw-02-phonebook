import { Label, Input } from './ContactsFilter.styled';

export const ContactsFilter = ({ value, onChange }) => {
    return (
      <Label>
        Find contact by the name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    );
}