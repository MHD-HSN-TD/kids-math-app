"use client"
import { newData } from '@/app/sessionList'
import { Breadcrumbs, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useRef } from 'react'

const page = () => {
    const params = useParams()
    console.log(params)
    // const currentLesson = params.class.charAt(params.class.length - 1)
    // const currentSession = params.session.charAt(params.session.length - 1)
    // const currentQuestion = params.question.charAt(params.question.length - 1)

    let currentSession = params.session.split("_")[1] // split the params with '_' and assigned the number to the var
    let currentQuestion = params.question.split("_")[1] // split the params with '_' and assigned the number to the var
    let currentLesson = params.class.split("_")[1] // split the params with '_' and assigned the number to the var
    console.log(currentSession, "currentSession")
    console.log(currentQuestion, "currentQuestion")
    console.log(currentLesson, "currentLesson")

    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset playback to the start
        }
    };
    return (
        <div className="flex flex-col  gap-8  items-center sm:items-start" >
            <div>this is a question {currentQuestion}</div>
            {newData.map(session => {
                if (session.href == params.session) {
                    return session.classList.map((classListItem, index) => {
                        // console.log(classItem.sessionNumber, 'classItem.sessionNumber')
                        // console.log(session.sessionNumber, 'classItem.sessionNumber')

                        if (classListItem.classNumber == currentLesson) {
                            // console.log(classListItem.sessionNumber == session.sessionNumber, 'classItem.sessionNumber == session.sessionNumber')
                            return classListItem.slideList.map((slide, slideIndex) => {
                                if (slide.slideNumber == currentQuestion) {
                                    return < div key={slideIndex} className=""
                                        href={`lesson_${classListItem.classNumber}/question_${slide.slideNumber}`}>
                                        {console.log(slide.slideNumber, 'slide.slideNumber')}
                                        {slide.text}
                                        {currentQuestion != 1 ? <Image
                                            src={`/${slide.questionImagePath}`} alt={slide.text}
                                            width={200} height={200}></Image> : ""}
                                        <audio
                                            ref={audioRef}
                                            src={`/assets/${slide.questionAudioPath}`}>
                                            Your browser does not support the audio element.
                                        </audio>
                                        <div>
                                            {slide.questionAudioPath}
                                            <br />
                                            <button onClick={playAudio}>Play</button>
                                            <button onClick={pauseAudio}>Pause</button>
                                            <button onClick={stopAudio}>Stop</button>
                                        </div>
                                    </div>
                                }
                            }
                            )


                        }
                    })
                }
            }
            )
            }
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href={`/sessions/session_2/lesson_${currentLesson}`}                >
                    {` الدرس  ${currentLesson}  `}
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href={`/sessions/session_${currentSession}`}                >
                    {` الجلسة  ${currentSession}  `}
                </Link>
                <Link underline="hover" color="inherit" href={`/sessions`}>
                    الجلسات
                </Link>
                <Typography sx={{ color: 'text.primary' }}>المحتوى</Typography>
            </Breadcrumbs>
        </div >
    )
}

export default page