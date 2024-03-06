import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/**
 * NavBar component representing the navigation bar.
 * @returns {JSX.Element} NavBar component.
 */
function NavBar() {
    // Instagram 
    const instagramUsername = 'sama.realstate';
    const intagramUrl = `https://www.instagram.com/${instagramUsername}/`;

    // Facebook Messenger
    const facebookMessengerUsername = '100090265909098';
    const facebookMessengerUrl = `https://m.me/${facebookMessengerUsername}`;

    // Whatsapp
    const whatsappNumber = '50661497552';
    const message = '';
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    return (
        <Navbar expand='lg' className='navbar'>
            <Container className='navbar-content'>
                <Navbar.Brand href='/' className='navbar-brand'>
                    {/* <img
                        alt=""
                        src="src/assets/logo.svg"
                        width="90"
                        height="90"
                        className="d-inline-block align-top"
                    />{' '} */}
                    Sama Real Estate
                </Navbar.Brand>
                <div className='navbar-social-media'>
                    <a href={intagramUrl}><FontAwesomeIcon icon={faInstagram} className='navbar-social-media-icon' /></a>
                    <a href={facebookMessengerUrl}><FontAwesomeIcon icon={faFacebookMessenger} className='navbar-social-media-icon' /></a>
                    <a href={whatsappUrl}><FontAwesomeIcon icon={faWhatsapp} className='navbar-social-media-icon' /></a>
                </div>
            </Container>
        </Navbar>
    )
}

// TODO: Agregar el icono de la empresa, debe tener el color beige que nos indico la diseñadora.
export default NavBar