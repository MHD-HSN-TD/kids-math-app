"use client"
import 'regenerator-runtime/runtime'
import Button from '@mui/material/Button';


import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const startVoiceRecognition = () => {
        SpeechRecognition.startListening({ language: 'ar-EG' })

    }
    return (
        <div className='mx-auto'>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <Button variant="contained"
                color="success"
                onClick={startVoiceRecognition}>Start</Button>
            <Button
                variant="contained"
                color="error" onClick={SpeechRecognition.stopListening}>Stop</Button>
            {/* <Button variant="contained">Hello world</Button> */}
            <Button variant="contained"
                color="warning" onClick={resetTranscript}>Reset</Button>
            <p>{transcript}</p>
        </div>
    );
};
export default Dictaphone;