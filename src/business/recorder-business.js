export default class RecorderBusiness {
    static CaptureScreen = async () => {
        return new Promise((resolve, reject) => {
            try {
                var videoConstraints = {
                    video: true, audio: true
                };
                if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
                    navigator
                        .mediaDevices
                        .getDisplayMedia(videoConstraints)
                        .then(stream => resolve(stream))
                        .catch(err => reject(err));
                }
                else {
                    navigator
                        .getDisplayMedia(videoConstraints)
                        .then(stream => resolve(stream))
                        .catch(err => reject(err));
                }
            } catch (e) {
                reject(e);
            }
        });
    }

    static CaptureAudio = async () => {
        return new Promise((resolve, reject) => {
            navigator.getUserMedia({
                audio: {
                    optional: [
                        { sourceId: 'audio-output-device-id' }
                    ]
                },
                video: false
            }, function (audioStream) {
                resolve(audioStream);
            }, function (e) { reject(e); });
        });
    }

    static CaptureCam = async () => {
        return new Promise((resolve, reject) => {
            navigator.getUserMedia({
                audio: false,
                video: true
            }, function (camStream) {
                resolve(camStream);
            }, function (e) { reject(e); });
        });
    }

    static SaveAs = async (blob, fileName) => {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}