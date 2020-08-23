import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import { GlobalContext} from '../context/GlobalState';
import ContactListItem from './ContactListItem';

export default function ContactList()  {

   const { loading , error, contacts } = useContext(GlobalContext)
      
    return (
        <>
        { loading ? 'Loading' :
        <Table>
        <thead>
          <tr>
            <th>Contact Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map(contact => (
           <ContactListItem  key={contact.id} contact={contact}  />
          ))}
        </tbody>
      </Table>
      }
      {error ? error : null}
      </>
    )
}
