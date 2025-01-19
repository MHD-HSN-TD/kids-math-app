"use client"
import { newData } from '@/app/sessionList'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
    console.log(params)
    const currentLesson = params.class.charAt(params.class.length - 1)
    const currentQuestion = params.question.charAt(params.question.length - 1)
    console.log(currentQuestion, "currentQuestion")


    return (
        <div className="flex flex-col  gap-8  items-center sm:items-start" >
            <div>this is a question page</div>
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
                                        <Image
                                            src={`/${slide.questionImagePath}`} alt={slide.text}
                                            width={200} height={200}></Image>
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

        </div >
    )
}

export default page