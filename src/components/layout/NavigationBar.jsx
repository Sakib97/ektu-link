import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./NavigationBar.module.css";
import logo from "/link.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiMenu5Fill } from "react-icons/ri";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home" className={styles.brand}>
          <img src={logo} alt="ektu link" className={styles.logo} />
          <span>ektu link</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-offcanvas"
          className={styles.toggle}
        >
          <CgMenuLeftAlt size={28} />
        </Navbar.Toggle>

        <Navbar.Offcanvas
          id="navbar-offcanvas"
          aria-labelledby="navbar-offcanvas-label"
          placement="start"
          className={styles.offcanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="navbar-offcanvas-label">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="mx-auto">
              <Nav.Link href="#features" className={styles.navLink}>
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className={styles.navLink}>
                Pricing
              </Nav.Link>
              <Nav.Link href="#api-docs" className={styles.navLink}>
                API Docs
              </Nav.Link>
            </Nav>
            <Nav className={styles.authNav}>
              <Nav.Link href="#signin" className={styles.signIn}>
                Sign In
              </Nav.Link>
              <Nav.Link href="#get-started" className={styles.getStarted}>
                Get Started
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
