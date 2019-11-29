import React from "react";
import Link from "next/link";
import "./landingpage.css";
import { Jumbotron, Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaDownload, FaRocket, FaCircle, FaBatteryThreeQuarters } from "react-icons/fa";
import { FiHardDrive } from "react-icons/fi";
import { MdMoneyOff, MdVideocam, MdMic } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";

export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <Container className="mt-5">
                    <Jumbotron className="text-center">
                        <div className="jumbotron-content">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <div className="rec-text"><FaCircle className="mr-2" /> REC</div>
                            <div className="battery"><FaBatteryThreeQuarters className="mr-2" /></div>
                            <div className="time">00:09:16</div>
                            <div style={{ paddingTop: '10%' }}>
                                <h1>ONLINE SCREEN RECORDER</h1>
                                <p>
                                    Capture your screen, audio, and mic instantly.
                                <br />
                                    Download your recordings right away.
                                </p>
                                <p>
                                    <Link href="/recorder">
                                        <Button className="main-button mt-3" size="lg" variant="danger"><FaCircle className="mr-2" /> RECORD</Button>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </Jumbotron>

                    <h2 className="mt-5 mb-4">👌 Features</h2>
                    <Row>
                        <Col className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title><FaDownload className="mr-2" /> NO Download</Card.Title>
                                    <Card.Text>
                                        Run it right on your browser! No need to download anything.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title><FiHardDrive className="mr-2" /> NO Installation</Card.Title>
                                    <Card.Text>
                                        Since you don't have to download anything, you don't have to install anything!
                                        <br />
                                        <br />
                                        You don't even have to install any browser extension.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title><MdMoneyOff className="mr-2" /> FREE!</Card.Title>
                                    <Card.Text>
                                        100% free. No payment or any shits.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <h2 className="mt-5 mb-4">👌👌 More Features</h2>
                    <Row>
                        <Col className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title><MdVideocam className="mr-2" /> Capture</Card.Title>
                                    <Card.Text>
                                        Capture your whole screen, a specific tab, or a specific app window.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title><MdMic className="mr-2" /> Narrate</Card.Title>
                                    <Card.Text>
                                        Don't be shy, record your beautiful voice!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title><AiFillSound className="mr-2" /> Internal Audio</Card.Title>
                                    <Card.Text>
                                        Record the sounds played by your device.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title><FaRocket className="mr-2" /> Instant</Card.Title>
                                    <Card.Text>
                                        Save your recording on your computer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}