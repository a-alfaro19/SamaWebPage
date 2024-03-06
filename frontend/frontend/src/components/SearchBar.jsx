import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'

/**
 * SearchBar component representing a search bar with a search button.
 * @param {object} props - Component props.
 * @param {function} props.onSearch - Callback function triggered when the search button is clicked.
 * @returns {JSX.Element} SearchBar component.
 */
function SearchBar ({onSearch}) {
    // State to track the search query
    const [query, setQuery] = useState('');

    /**
     * Handler function triggered when the search input value changes.
     * @param {object} event - Event object.
     */
    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    /**
     * Handler function triggered when the search button is clicked.
     */
    const handleOnClick = () => {
        console.log(query);
        onSearch();
    }

    return (
        <Container>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" className='search-bar-span'>
                    <button className='search-bar-button' onClick={handleOnClick}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </InputGroup.Text>
                <Form.Control
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                    placeholder='Buscar'
                    value={query}
                    onChange={handleChange}
                    className='search-bar'
                />
            </InputGroup> 
        </Container>
    )
}

export default SearchBar;