import { FFmpeg } from '@ffmpeg/ffmpeg'

import coreURL from '../ffmpeg/ffmpeg-core.js?url'
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url'
import workerURL from '../ffmpeg/ffmpeg-worker.js?url'


let fftmpeg: FFmpeg | null

export async function getFFmpeg(){
    if(fftmpeg) {
        return fftmpeg
    }

    fftmpeg = new FFmpeg()

    if(!fftmpeg.loaded){
        await fftmpeg.load({
            coreURL,
            wasmURL,
            workerURL,
        })
    }

    return fftmpeg
}