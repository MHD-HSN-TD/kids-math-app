import Link from 'next/link'
import React from 'react'
import { data } from '../sessionList'

const page = () => {
    return (
        <div>

            <div>This is a sessions Page</div>
            <div className="flex flex-col gap-8  items-center sm:items-start" >
                {data.map(e => <div key={e.sessionNumber} className="">
                    <Link href={`sessions/${e.href}`}>
                        {e.text}
                        {e.id + 1}
                    </Link>
                </div>)}

                {/* <Link href={`sessions`}>sessions</Link>
                <Link href={`dictaphone`}>dictaphone</Link>
                <Link href={`الصوت`}>الصوت</Link> */}
            </div >
        </div>
    )
}

export default page