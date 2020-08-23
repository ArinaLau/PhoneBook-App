import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { GlobalContext} from '../context/GlobalState';


export default function EditContact({ contact, handleEdit }) {

    const { updateContact } = useContext(GlobalContext)

    const { id, name, phoneNumber } = contact

    const [updateData, setUpdateData] = useState({
        key: id,
        updateName: name,
        updatePhoneNumber: phoneNumber
      })

    const { updateName, updatePhoneNumber } = updateData
    
    const [visible, setVisible] = useState(false);

    const onChangeEdit = e => {
        setUpdateData({...updateData, [e.target.name]: e.target.value})
        console.log(updateData)
    }

    const handleSubmitEdit = e => {
        e.preventDefault()
        if(updateName !== "" || updatePhoneNumber !== ""){
            const item = {
                id: id,
                name: updateName,
                phoneNumber: updatePhoneNumber
            }
            updateContact(item.id, item)
            handleEdit()
            autoRefresh(5)
        }
        else {
            setVisible(true)
        }
    }

    const onDismiss = () => {
        setVisible(false)
    }

    function autoRefresh(time){
        setTimeout(window.location.reload(), time)
    }

    return (
        <Form key={id}>
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                   Please make sure input fields are not empty!
                </Alert>   

            <FormGroup>
                <Label for="name">Contact Name</Label>
                <Input 
                    type="text" 
                    name="updateName" 
                    placeholder="Contact Name..." 
                    defaultValue={name} 
                    autoComplete="off" 
                    onChange={onChangeEdit} 
                />
            </FormGroup>
            <FormGroup>
                <Label for="phoneNumber">Contact Number</Label>
                <Input 
                    type="text" 
                    name="updatePhoneNumber" 
                    placeholder="Contact Number..." 
                    defaultValue={phoneNumber} 
                    autoComplete="off"
                    onChange={onChangeEdit} 
                />
            </FormGroup>
            <FormGroup>
                <Button color="primary" onClick={(e, id) => {
                    handleSubmitEdit(e)
                }}>Save Changes</Button>{' '}
                <Button color="secondary" className="float-right" onClick={handleEdit}>Cancel</Button>
            </FormGroup>
        </Form>
    )
}
