import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { GlobalContext} from '../context/GlobalState';


export default function EditContact({ contact, handleEdit }) {

    const { updateContact } = useContext(GlobalContext)

    const [updateData, setUpdateData] = useState({
        id: contact.id,
        name: contact.name,
        phoneNumber: contact.phoneNumber
    })

    const [visible, setVisible] = useState(false);

    const onChangeEdit = e => {
        setUpdateData({...updateData, [e.target.name]: e.target.value})
    }

    const handleSubmitEdit = e => {
        e.preventDefault()
        if(updateData.name !== "" && updateData.phoneNumber !== ""){
           updateContact(updateData.id, updateData)
           handleEdit()
        }
        else {
            setVisible(true)
        }
    }

    const onDismiss = () => {
        setVisible(false)
    }

    return (
        <Form>
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                   Please make sure input fields are not empty!
                </Alert>   

            <FormGroup>
                <Label for="name">Contact Name</Label>
                <Input 
                    type="text" 
                    name="name" 
                    placeholder="Contact Name..." 
                    defaultValue={contact.name} 
                    autoComplete="off" 
                    onChange={onChangeEdit} 
                />
            </FormGroup>
            <FormGroup>
                <Label for="phoneNumber">Contact Number</Label>
                <Input 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="Contact Number..." 
                    defaultValue={contact.phoneNumber} 
                    autoComplete="off"
                    onChange={onChangeEdit} 
                />
            </FormGroup>
            <FormGroup>
                <Button color="primary" onClick={handleSubmitEdit}>Save Changes</Button>{' '}
                <Button color="secondary" className="float-right" onClick={handleEdit}>Cancel</Button>
            </FormGroup>
        </Form>
    )
}
