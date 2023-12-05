import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className='bg-primary'>
        <Navbar.Brand as={Link} href='https://flowbite-react.com'>
          <p className='text-white'>Logo</p>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href='#' active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href='#'>
            Skills
          </Navbar.Link>
          <Navbar.Link href='#'>Projects</Navbar.Link>

          <Navbar.Link href='#'>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
