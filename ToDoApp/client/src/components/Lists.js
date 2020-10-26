import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

const ListsComponent = (props) => {
    console.log(props.token)
    const [userLists, setUserLists] = useState([]);
    const [modalOpen, setModalOpen] = useState(false); 

    const [newListTitle, setNewListTitle] = useState("");
    // const [newListDescription, setNewListDescription] = useState('');

    const modifyListTitle = (event) => {
        setNewListTitle(event.target.value);
    }

    const submitNewList = (event) => {
        event.preventDefault();
        // setUserLists([
        //     ...userLists,
        //     { title: newListTitle }
        // ]);
        fetch("http://localhost:8080/list/new", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": props.token,
            },
            body: JSON.stringify({
                title: newListTitle
            })
        })
        .then(response => response.json())
        .then(json => {
            // setUserLists([
            //     ...userLists,
            //     json.list
            // ]);
        })
        .catch(error => console.log(error))
    }

    const toggleModal = () => setModalOpen(!modalOpen);

    useEffect(() => {
        fetch("http://localhost:8080/list", {
            method: "GET", 
            headers: {
                "Authorization": props.token,
            }
        })
        .then(response => response.json())
        .then(body => {
            console.log(body.results);
            // setUserLists(body.results)
        })
        .catch(err => console.log(err)); 
    }, [])

    return (
        <div id="listsView">
            <div id="listViewHeader">
                <h1>Your Lists</h1>
                <Button color="success" onClick={toggleModal}>
                    New List
                </Button>
                <Modal isOpen={modalOpen} toggle={toggleModal}>
                    <ModalHeader>
                        Create New TODO List
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="newTitle">Title:</Label>
                                <Input type="text" id="newTitle" onChange={modifyListTitle} value={newListTitle}/>
                            </FormGroup>
                        </Form>
                        <Button color="warning" onClick={toggleModal}>
                            Cancel
                        </Button>
                        <Button color="success" onClick={submitNewList}>
                            Create List
                        </Button>
                    </ModalBody>
                </Modal>
            </div>
            {userLists.length > 0 ? (
                userLists.map((item) => {
                    return (
                        <Card>
                            <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                {/* <CardText>{item.description}</CardText> */}
                                <Button>
                                    {/* update button */}
                                    View List Items
                                </Button>
                            </CardBody>
                        </Card>
                    );
                })
                ) : (
                    <h1>You have no lists</h1>
                )}
        </div>
    )
}

export default ListsComponent;