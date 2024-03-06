import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

/**
 * Counter component displaying a counter and plus/minus buttons.
 * @param {object} props - Component props.
 * @param {number} props.counter - Counter value.
 * @param {function} props.addFunction - Function to increase the counter.
 * @param {function} props.reduceFunction - Function to decrease the counter.
 * @returns {JSX.Element} Counter component.
 */
function Counter({counter, addFunction, reduceFunction}) {

    return (
        <div className="three-btn-container">
            <Button className="button-left" onClick={reduceFunction}><FontAwesomeIcon icon={faMinus} /></Button>
            <Button className="button-mid">{counter}</Button>
            <Button className="button-right" onClick={addFunction}><FontAwesomeIcon icon={faPlus} /></Button>
        </div>
    )
}

export default Counter