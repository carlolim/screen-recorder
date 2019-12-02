import React from "react";
import RecordRTC from "../../business/recordrtc-business";
import { FaCircle, FaStop, FaPause, FaPlay } from 'react-icons/fa';
import RecorderBusiness from "../../business/recorder-business";
import "../../App.css";

var recorder; // the variable to handle recordRTC object

export default class Recorder extends React.Component {
    state = {
        captureCamera: false,
        captureMic: true,
        isRecording: false,
        isPaused: false
    }

    _startRecording = async () => {
        try {
            var screenStream = await RecorderBusiness.CaptureScreen();
            var audioStream = await RecorderBusiness.CaptureAudio();
            recorder = RecordRTC([screenStream, audioStream], {
                type: 'video',
                video: { width: 1920, height: 1080 },
                frameInterval: 90,
                frameRate: 90,
                disableLogs: false
            });
            recorder.startRecording();
            this.setState({ isRecording: true, isPaused: false });
        } catch (e) {
            // console.log(e);
        }
    }

    _pauseRecording = () => {
        recorder.pauseRecording();
        this.setState({ isPaused: true });
    }

    _resumeRecording = () => {
        recorder.resumeRecording();
        this.setState({ isPaused: false });
    }

    _stopRecording = async () => {
        this.setState({ isRecording: false, isPaused: false });
        recorder.stopRecording(() => {
            var blob = recorder.getBlob();
            var fileName = 'recording.webm';
            RecorderBusiness.SaveAs(blob, fileName);
        });
    }

    render() {
        return (
            <>
                <div className="mt-5 text-center">
                    <p>
                        <b>Note: Mobile browsers are not supported!</b>
                    </p>
                    <button
                        className="action-button btn-red"
                        disabled={this.state.isRecording}
                        onClick={this._startRecording.bind(this)}>
                        <FaCircle />
                    </button>
                    <button
                        className="action-button btn-green"
                        disabled={!this.state.isPaused}
                        onClick={this._resumeRecording.bind(this)}>
                        <FaPlay />
                    </button>
                    <button
                        className="action-button btn-green"
                        disabled={!(this.state.isRecording && !this.state.isPaused)}
                        onClick={this._pauseRecording.bind(this)}>
                        <FaPause />
                    </button>
                    <button
                        className="action-button btn-red"
                        disabled={!this.state.isRecording}
                        onClick={this._stopRecording.bind(this)}>
                        <FaStop />
                    </button>
                </div>

            </>
        )
    }
}