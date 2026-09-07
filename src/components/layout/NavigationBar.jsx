import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./NavigationBar.module.css";
import logo from "/link.png";
import logo2 from "/eL2.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiMenu5Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";

const NavigationBar = () => {
  const { user, userMeta } = useAuth();

  // Offcanvas state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg" className={` fixed-top ${styles.navbar}`}>
      <Container>
        <Navbar.Brand href="/" className={styles.brand}>
          <img src={logo2} alt="ektu link" className={styles.logo} />
          <span>ektu link</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-offcanvas"
          onClick={handleShow}
          className={styles.toggle}
        >
          <CgMenuLeftAlt size={28} />
        </Navbar.Toggle>

        <Navbar.Offcanvas
          id="navbar-offcanvas"
          aria-labelledby="navbar-offcanvas-label"
          placement="start"
          className={styles.offcanvas}
          show={show}
          onHide={handleClose}
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
              {/* <Nav.Link as={Link} to="/dashboard" className={styles.navLink}>
                Dashboard
              </Nav.Link> */}
            </Nav>
            <Nav className={styles.authNav}>
              {user ? (
                <Nav.Link
                  as={Link}
                  to="/dashboard"
                  onClick={handleClose}
                  className={styles.navLink}
                >
                  {user?.user_metadata?.name || user?.email}
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/signin"
                  onClick={handleClose}
                  className={styles.getStarted}
                >
                  Sign In
                </Nav.Link>
              )}

              {/*  */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
