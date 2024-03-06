import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

/**
 * DropMenu component representing a dropdown menu.
 * @param {object} props - Component props.
 * @param {string[]} props.items - Array of items to display in the dropdown menu.
 * @param {function} props.callback - Callback function triggered when an item is selected.
 * @returns {JSX.Element} DropMenu component.
 */
function DropMenu({items, callback}) {
    // State to track the selected item in the dropdown menu
    const [selectedLocation, setSelectedLocation] = useState(items[0]);

    /**
     * Handler function triggered when an item is clicked.
     * @param {string} selectedItem - Selected item.
     */
    const handleClick = (selectedItem) => {
        setSelectedLocation(selectedItem);
        callback(selectedItem);
    }

    return (
        <DropdownButton title={selectedLocation} className="drop-button">
            {items.map((item, index) => (
                <Dropdown.Item key={`location${index}`} eventKey={index} onClick={() => handleClick(item)}>{item}</Dropdown.Item>
            ))}
        </DropdownButton>
    )
}

export default DropMenu;