import { Decoder, Encoder, tools, Reader } from 'ts-ebml';

export default class MetadataBusiness {
    static ReadAsArrayBuffer = (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            reader.onloadend = () => { resolve(reader.result); };
            reader.onerror = (ev) => { reject(ev.error); };
        });
    }

    static InjectMetadata = async (blob) => {
        return new Promise((resolve, reject) => {
            const decoder = new Decoder();
            const reader = new Reader();
            reader.logging = false;
            reader.drop_default_duration = false;
    
            // load webm blob and inject metadata
            this.ReadAsArrayBuffer(blob).then((buffer) => {
                const elms = decoder.decode(buffer);
                elms.forEach((elm) => { reader.read(elm); });
                reader.stop();
    
                let refinedMetadataBuf = tools.makeMetadataSeekable(
                    reader.metadatas, reader.duration, reader.cues);
                let body = buffer.slice(reader.metadataSize);
                let result = new Blob([refinedMetadataBuf, body],
                    { type: blob.type });
    
                blob = result;
                resolve(true);
            });
        });
    }
}