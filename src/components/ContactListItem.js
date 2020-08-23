import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { GlobalContext} from '../context/GlobalState';
import EditContact from './EditContact';

export default function ContactListItem({ contact }) {

    const { deleteContact } = useContext(GlobalContext)

    const [modal, setModal] = useState(false)

    const handleEdit = () => {
        setModal(!modal)
    }

    const {id, name, phoneNumber} = contact

    return (
        <tr>
              <td>{name}</td>
              <td>{phoneNumber}</td>
              <td>
                <Button color="success" size="sm" className="mr-2" onClick={handleEdit}>Edit</Button>
                
                <Modal isOpen={modal} toggle={handleEdit}>
                    <ModalHeader toggle={handleEdit}>Edit Contact</ModalHeader>
                    <ModalBody>
                        <EditContact key={id} contact={contact} handleEdit={handleEdit} />
                    </ModalBody>
                </Modal>

                <Button color="danger" size="sm" onClick={() => {
                    deleteContact(id)
                }}>Delete</Button>
                
              </td>
        </tr>
    )
}
