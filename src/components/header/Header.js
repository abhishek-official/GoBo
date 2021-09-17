import React, { Component, useState} from 'react';
import '../../App.css';
import './Header.css';
import { Image,Container,Dropdown ,Row ,Col,Nav, Navbar, NavDropdown,Button } from 'react-bootstrap';
import sitelogo from '../header/header_img/gobo_logo.png';
import profileimg from '../header/header_img/pf.png';


function Header() {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        
        </a>
      ));

      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState('');
      
          return (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
              
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
              </ul>
            </div>
          );
        },
      );

        return (
            <div>
                <header className="top_header">
                    
                        <Navbar bg="light" expand="md" className="custom-nav shadow" fixed="top">
                            <Container fluid>
                                <Navbar.Brand>
                                    <Nav.Link to="/" className="header-logo p-0">
                                        <a>
                                            <Image
                                            src={sitelogo}
                                            className="site-logo"
                                            alt="Gobo logo"
                                        />
                                        </a>
                                    </Nav.Link>                            
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto main_nav_ul">
                                        <Nav.Link ><a className="gc_main_navigation active_class" role="button"> Home</a> </Nav.Link>
                                        <Nav.Link><a role="button"> Artist</a> </Nav.Link>
                                        <Nav.Link><a role="button"> Producer</a> </Nav.Link>
                                        <NavDropdown title="Auditions" id="basic-nav-dropdown" className="nav-link mega-menu">
                                            <Container className="eventsNav pt-0 mt-0">
                                                <Row>
                                                    <Col xs="12" md="3" className="text-left sub_menu_block">
                                                        <Dropdown.Header>job skills</Dropdown.Header>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                    </Col>
                                                    <Col xs="12" md="3" className="text-left sub_menu_block">
                                                        <Dropdown.Header>categories</Dropdown.Header>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                    </Col>
                                                    <Col xs="12" md="3" className="text-left sub_menu_block">
                                                        <Dropdown.Header>job location</Dropdown.Header>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                    </Col>
                                                    <Col xs="12" md="3" className="text-left sub_menu_block">
                                                        <Dropdown.Header>open jobs</Dropdown.Header>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> HTML5 & CSS3</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Nav.Link><a className="nav-link" role="button"> Events</a> </Nav.Link>
                                                        </Dropdown.Item>
                                                    </Col>
                                                </Row>
                                        </Container>
                                    </NavDropdown>
                                        <Nav.Link><a role="button"> Contact</a> </Nav.Link>
                                        <Nav.Link><a role="button"> <i className="fas fa-search"></i></a> </Nav.Link>
                                    </Nav>

                                    <div className="posting_job">
                                        <ul>
                                            <li> 
                                                <Dropdown className="profile-dropdown pt-2">
                                                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                                        <Image src={profileimg} />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu as={CustomMenu} className="p-0 rounded-0">
                                                    <Dropdown.Item eventKey="1"><i className="fas fa-user-tie"></i> My Profile</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2"><i className="fas fa-user-cog"></i> Edit Profile</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>  <i className="fas fa-bell"></i> Notifications </Dropdown.Item>
                                                    <Dropdown.Item eventKey="1"><i className="fas fa-sign-out-alt"></i> Logout</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>                                                                               
                                            </li>

                                            <li>
                                                <Button variant="primary" className="rounded-pill">Sign Up</Button>{' '}
                                            </li>
                                        </ul>
                                    </div>
                                </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    
                </header>
            </div>
        );
    }

export default Header;
