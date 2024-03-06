import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container';

/**
 * SelectableButton component representing a group of selectable buttons.
 * @param {object} props - Component props.
 * @param {function} props.callback - Callback function triggered when a button is selected.
 * @returns {JSX.Element} SelectableButton component.
 */
function SelectableButton({callback}) {
    const [selectedLeft, setSelectedLeft] = useState(true);
    const [selectedRight, setSelectedRight] = useState(false);
    const [selectedMid, setSelectedMid] = useState(false);

    /**
     * Handler function triggered when a button is clicked.
     * @param {object} event - Event object.
     */
    const handleClick = (event) => {
        const id = event.target.id;
        if (id == "all") {
            setSelectedLeft(!selectedLeft);
            setSelectedMid(false);
            setSelectedRight(false);
        } else if(id == "sell") {
            setSelectedMid(!selectedMid);
            setSelectedLeft(false);
            setSelectedRight(false);
        } else if(id == "rent") {
            setSelectedRight(!selectedRight);
            setSelectedMid(false);
            setSelectedLeft(false);
        }
        callback(event.target.id);
    }

    return (
        <Container className='type-selector'>
            <Button id="all" className={`button-left ${selectedLeft ? "selected-button" : ""}`} onClick={handleClick}>Todo</Button>
            <Button id="sell" className={`button-mid ${selectedMid ? "selected-button" : ""}`} onClick={handleClick}>Venta</Button>
            <Button id="rent" className={`button-right ${selectedRight ? "selected-button" : ""}`} onClick={handleClick}>Renta</Button>
        </Container>
    )
}

export default SelectableButton