import React from "react";
import { Modal, Button, Container } from "react-bootstrap";

export default (props) => (
    <>
        <Container className="mt-5">
            <h2>Instructions (Chrome)</h2>
            <ul className="list-instructions pt-4 pb-4">
                <li>
                    <h5>Step 1</h5>
                    <p>Click on the red button to start recording</p>
                    <img alt="" src={`${process.env.ASSET_PREFIX}/images/step1.png`} />
                </li>
                <li>
                    <h5>Step 2</h5>
                    <p>
                        A pop up will show asking you to share your scree (with the recorder) with the following options:
                    </p>
                    <ul>
                        <li><b>Your Entire Screen: </b>you will record your entire screen or monitor regardles of what window or apps are active.</li>
                        <li><b>Application Window: </b>you will record a specific window or app weather it is minimized or maximized.</li>
                        <li><b>Chrome Tab: </b>you will record a specific Chrome Tab weather it is active or not.</li>
                    </ul>
                    <img alt="" src={`${process.env.ASSET_PREFIX}/images/step2.png`} />
                </li>
                <li>
                    <h5>Step 3</h5>
                    <p>The green button is to pause the recording, while the red one is to stop the recording</p>
                    <img alt="" src={`${process.env.ASSET_PREFIX}/images/step3.png`} />
                </li>
                <li>
                    <h5>Step 4</h5>
                    <p>The green button is to resume the recording.</p>
                    <img alt="" src={`${process.env.ASSET_PREFIX}/images/step4.png`} />
                </li>
                <li>
                    <h5>Step 5</h5>
                    <p>A download will pop out when recording is stopped. This will save the recording in .webm format.
                            <br />
                        <i>Note: i'm working on a feature that allows saving in .mp4 format</i>
                    </p>
                    <img alt="" src={`${process.env.ASSET_PREFIX}/images/step5.png`} />
                </li>
            </ul>
        </Container>
    </>
)