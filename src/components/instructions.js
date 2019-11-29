import React from "react";
import { Modal, Button } from "react-bootstrap";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import step4 from "../images/step4.png";
import step5 from "../images/step5.png";

export default (props) => (
    <>
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Instructions - PC</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className="list-instructions pt-4 pb-4">
                    <li>
                        <h5>Step 1</h5>
                        <p>Click on the red button to start recording</p>
                        <img alt="" src={step1} />
                    </li>
                    <li>
                        <h5>Step 2</h5>
                        <p>
                            A pop up will show asking you to share your scree (with the recorder) with the following options:
                            <ul>
                                <li><b>Your Entire Screen: </b>you will record your entire screen or monitor regardles of what window or apps are active.</li>
                                <li><b>Application Window: </b>you will record a specific window or app weather it is minimized or maximized.</li>
                                <li><b>Chrome Tab: </b>you will record a specific Chrome Tab weather it is active or not.</li>
                            </ul>
                        </p>
                        <img alt="" src={step2} />
                    </li>
                    <li>
                        <h5>Step 3</h5>
                        <p>The green button is to pause the recording, while the red one is to stop the recording</p>
                        <img alt="" src={step3} />
                    </li>
                    <li>
                        <h5>Step 4</h5>
                        <p>The green button is to resume the recording.</p>
                        <img alt="" src={step4} />
                    </li>
                    <li>
                        <h5>Step 5</h5>
                        <p>A download will pop out when recording is stopped. This will save the recording in .webm format.
                            <br />
                            <i>Note: i'm working on a feature that allows saving in .mp4 format</i>
                        </p>
                        <img alt="" src={step5} />
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.close} variant="primary">Close</Button>
            </Modal.Footer>
        </Modal>
    </>
)