import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Logout() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const handleClose = () => setShow(false);
    const handleLogout = () => {
        localStorage.setItem('token','');
        localStorage.setItem('roles','');
        history.push('/login');
        setShow(false);
    };
    const handleShow = () => setShow(true);
  
    return (
      <>
      <li className="nav-text">
                  <Link onClick={handleShow}>
                  {/* <FaIcons.FaSignOutAlt /> */}
                    {/* <span>Logout</span> */}
                    Logout
                  </Link>
                </li>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to logout?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={handleLogout}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }