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
            <button className='btn ' onClick={startVoiceRecognition}>Start</button>
            <button className='btn ' onClick={SpeechRecognition.stopListening}>Stop</button>
            <Button variant="contained">Hello world</Button>
            <button className='btn ' onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </div>
    );
};
export default Dictaphone;