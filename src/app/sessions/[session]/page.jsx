"use client"
import Link from "next/link"
import { data } from "../../sessionList"
import { useParams } from "next/navigation"

const page = ({ }) => {
    const params = useParams()

    console.log(params)
    return <>
        <div>This is a classes Page</div>

        <div className="flex flex-col  gap-8  items-center sm:items-start" >
            {data.map(session => {
                if (session.href == params.session) {
                    return session.classList.map((classItem, index) => {

                        return < div key={index} className="" >
                            <Link
                                href={`${params.session}/lesson_${classItem.classNumber}`}
                            // href={`${params.session}/1`}
                            >
                                {classItem.text}
                                {/* {classItem.id + 1} */}
                                {/* {console.log(classItem.id)} */}
                            </Link>
                        </div>
                    })
                }

                // session.classList.map(classItem => {

                //     < div key={classItem.sessionNumber} className="" >
                //         <Link href={classItem.href}>
                //             {classItem.text}
                //             {classItem.id + 1}
                //             {console.log(classItem.id)}
                //         </Link>
                //     </div>
            }
            )
            }
        </div>

    </>







}

export default page