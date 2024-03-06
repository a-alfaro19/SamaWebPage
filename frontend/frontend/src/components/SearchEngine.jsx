import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectableButton from './SelectableButton';
import {Container, Row, Col} from 'react-bootstrap';
import RangeInput from './RangeInput';
import Counter from './Counter';
import DropMenu from './DropMenu';

/**
 * SearchEngine component representing a search engine with various filters.
 * @returns {JSX.Element} SearchEngine component.
 */
function SearchEngine() {
    // Property Type
    const [selectedType, setSelectedType] = useState("all");

    /**
     * Handler function triggered when a property type button is clicked.
     * @param {string} buttonId - ID of the clicked button.
     */
    const handleChangeType = (buttonId) => {
        const option = buttonId;
        setSelectedType(option);
    }

    // Counters
    const [rooms, setRooms] = useState(0); // Rooms
    const [bathrooms, setBathrooms] = useState(0); // Bathrooms
    const [garages, setGarages] = useState(0); // Garages

    /**
     * Function to increase a counter.
     * @param {number} counter - Current counter value.
     * @param {function} setFunction - Setter function for the counter.
     */
    const addCounter = (counter, setFunction) => {
        setFunction(counter+1);
    }

    /**
     * Function to decrease a counter.
     * @param {number} counter - Current counter value.
     * @param {function} setFunction - Setter function for the counter.
     */
    const reduceCounter = (counter, setFunction) => {
        if (counter !=0)
            setFunction(counter-1);
    }

    // Range Inputs
    const priceList = ["$1,000", "$5,000", "$10,000", "$50,000", "$100,000"];
    const [minPrice, setMinPrice] = useState(priceList[0]);
    const [maxPrice, setMaxPrice] = useState(priceList[priceList.length - 1]);
    
    const [propertyArea, setPropertyArea] = useState(2500);
    const [constructionArea, setConstructionArea] = useState(2500);

    // Location
    const locationList = ["Escazu", "Tibas", "Curridabat"];
    const [location, setLocation] = useState(locationList[0]);

    /**
     * Handler function triggered when the search button is clicked.
     */
    const handleOnChange = () => {
        console.log(`Tipo: ${selectedType}\nPrecio: ${minPrice}-${maxPrice}\nHabitaciones: ${rooms}\nBaños: ${bathrooms}\nGarajes: ${garages}\nArea de Construccion: ${constructionArea}\nArea de Propiedad: ${propertyArea}\nLocalizacion: ${location}\n`);
    } 

    return (
        <>
            <SearchBar onSearch={handleOnChange} />

            <Container className='search-filters'>
                <Row>
                    <Col>
                        <p className='filter-label'>Me interesa ...</p>
                        <SelectableButton callback={handleChangeType}/>
                    </Col>
                </Row>
                

                <br />
                <Row className='search-filter-row-one'>
                    <Col className='column' xs={12} md={3}>
                        <p className='filter-label'>Precio desde:</p>
                        <DropMenu items={priceList} callback={setMinPrice} />
                    </Col>

                    <Col className='column' xs={12} md={3}>
                        <p className='filter-label'>Precio hasta:</p>
                        <DropMenu items={priceList} callback={setMaxPrice} />
                    </Col>

                    <Col className='column' xs={12} md={3}>
                        <p className='filter-label'>Habitaciones</p>
                        <Counter addFunction={() => addCounter(rooms, setRooms)} reduceFunction={() => reduceCounter(rooms, setRooms)} counter={rooms} />
                    </Col>

                    <Col className='column' xs={12} md={3}>
                        <p className='filter-label'>Baños</p>
                        <Counter addFunction={() => addCounter(bathrooms, setBathrooms)} reduceFunction={() => reduceCounter(bathrooms, setBathrooms)} counter={bathrooms} />
                    </Col>

                    <Col className='column' xs={12} md={3}>
                        <p className='filter-label'>Garajes</p>
                        <Counter addFunction={() => addCounter(garages, setGarages)} reduceFunction={() => reduceCounter(garages, setGarages)} counter={garages} />
                    </Col>
                </Row>


                <br />
                <Row className='search-filter-row-two'>
                    <Col className='column' xs={12} md={4}>
                        <p className='filter-label'>Área de Construcción: {constructionArea} m²</p>
                        <RangeInput callBack={setConstructionArea} />
                    </Col>

                    <Col className='column' xs={12} md={4}>
                        <p className='filter-label'>Área de Propiedad: {propertyArea} m²</p>
                        <RangeInput callBack={setPropertyArea} />
                    </Col>

                    <Col className='column' xs={12} md={4}>
                        <p className='filter-label'>Localizaciones</p>
                        <DropMenu items={locationList} callback={setLocation} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SearchEngine