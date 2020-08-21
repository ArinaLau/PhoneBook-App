import React, { useState, useContext } from 'react'
import { FormGroup, Form, Button, Input, Label, Alert } from 'reactstrap';
import {v4 as uuidv4} from 'uuid';
import { GlobalContext } from '../context/GlobalState';

export default function AddContact(){

    const { addNewContact } = useContext(GlobalContext);
    
    const [contacts, setContacts] = useState({
        name: "",
        phoneNumber: ""
    })
   
    const [visible, setVisible] = useState(false);
    
    const { name, phoneNumber } = contacts
    
    const onChangeContact = e => {
        setContacts({...contacts, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(name !== "" || phoneNumber !== ""){
            const newContact = {
                id: uuidv4(),
                name,
                phoneNumber
            }
            addNewContact(newContact)

            setContacts({
                name: "",
                phoneNumber: ""
            })

            setVisible(!visible)
        }
    }
    
    return (
        <div className="mt-3">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label for="name">Contact Name</Label>
                <Input 
                    type="text" 
                    name="name" 
                    placeholder="Contact Name..." 
                    value={name}  
                    autoComplete="off" 
                    onChange={onChangeContact} />
                </FormGroup>
                <FormGroup>
                <Label for="phoneNumber">Contact Number</Label>
                <Input 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="Phone Number..." 
                    value={phoneNumber} 
                    autoComplete="off" 
                    onChange={onChangeContact} />
                </FormGroup>
                <FormGroup>
                    <Button className="float-right" color="primary" type="submit">Add Contact</Button>
                </FormGroup>
            </Form>

             <Alert color="success" isOpen={visible}>
                    New Contact Added!
                </Alert>    
        </div>
        
    )
}
