"use client"
import { data, newData } from "@/app/sessionList"
import Link from "next/link"
import { useParams } from "next/navigation"

const page = () => {
    const params = useParams()
    const currentLesson = params.class.charAt(params.class.length - 1)
    console.log(params.class.charAt(params.class.length - 1))

    return (
        <div className="flex flex-col  gap-8  items-center sm:items-start" >
            <div>this is a slide page</div>
            {newData.map(session => {
                if (session.href == params.session) {
                    return session.classList.map((classListItem, index) => {
                        // console.log(classItem.sessionNumber, 'classItem.sessionNumber')
                        // console.log(session.sessionNumber, 'classItem.sessionNumber')

                        if (classListItem.classNumber == currentLesson) {
                            // console.log(classListItem.sessionNumber == session.sessionNumber, 'classItem.sessionNumber == session.sessionNumber')
                            return classListItem.slideList.map((slide, slideIndex) =>
                                < Link key={slideIndex} className=""
                                    href={`lesson_${classListItem.classNumber}/question_${slide.slideNumber}`
                                        // href={`${classListItem.classNumber}/${slide.slideNumber}/1`

                                    }>
                                    {slide.text}
                                </Link>
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

