import React from 'react';
import Link from "next/link";
import Head from "next/head";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => (
    <>
        <Head>
            <title>Screen Recorder</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link href="/" as={`${process.env.ASSET_PREFIX}/`}>
                        <a>🎥</a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link href="/recorder" as={`${process.env.ASSET_PREFIX}/recorder`}><a className="nav-link">Recorder</a></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {props.children}
    </>
)

