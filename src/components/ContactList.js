import React, { useContext } from 'react';
import { Table, Button } from 'reactstrap';
import { GlobalContext} from '../context/GlobalState';

export default function ContactList()  {

   const { loading , error, contacts, deleteContact } = useContext(GlobalContext)
      
    return (
        <>
        { loading ? 'Loading' :
        <Table>
        <thead>
          <tr>
            <th>Contact Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.phoneNumber}</td>
              <td>
                <Button color="danger" size="sm" onClick={() => {
                    deleteContact(contact.id)
                }}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      }
      {error ? error : null}
      </>
    )
}
