import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function Details(props) {

    const { className, info } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button className="button" color="danger" onClick={toggle}>Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{info.name}</ModalHeader>
                <ModalBody>
                    <p>Birth Year: {info.birth_year}</p>
                    <p>Gender: {info.gender}</p>
                    <p>Hair Color: {info.hair_color}</p>
                    <p>Skin Color: {info.skin_color}</p>
                    <p>Height: {info.height} inches</p>
                    <p>Mass: {info.mass} kgs</p>
                </ModalBody>
            </Modal>
        </div>
    )
}