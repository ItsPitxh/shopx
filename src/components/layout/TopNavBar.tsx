import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Badge, Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../logo.svg';
import { PublicRoutes } from '../../constants/ApplicationRoutes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const TopNavBar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar collapseOnSelect className='navbar-pastel-orange' expand='sm'>
        <Container>
          <Navbar.Brand role='button' onClick={() => navigate('/')} className='text-white'>
            <img alt='' src={logo} width='30' height='30' className='d-inline-block align-top' />{' '}
            ShopXPress
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end text-white'>
            <Nav.Link>
              <Button variant='outline-link' className='position-relative me-2' color='white' onClick={() => navigate('/cart')}>
                <Badge pill bg='warning' className='position-absolute top-0 start-100 translate-middle'>
                  1
                </Badge>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Button>
            </Nav.Link>

            {isAuthenticated ? (
              <NavDropdown title='Login as XXX' id='basic-nav-dropdown'>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav>
                <Nav.Link onClick={() => navigate(PublicRoutes.LOGIN)}>Login</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavBar;