import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

/**
 * RangeInput component representing a range input slider.
 * @param {object} props - Component props.
 * @param {function} props.callBack - Callback function triggered when the range input value changes.
 * @returns {JSX.Element} RangeInput component.
 */
function RangeInput({callBack}) {
    /**
     * Handler function triggered when the range input value changes.
     * @param {object} event - Event object.
     */
    const handleChange = (event) => {
        callBack(event.target.value);
    }

    return (
        <Container className='range-input-rect'>
            <Form.Range
                onChange={handleChange} 
                className='range-input'
                min={1000}
                max={4000}
                step={50}
                list='tickmarks'
            />

        </Container>
    )
}

export default RangeInput