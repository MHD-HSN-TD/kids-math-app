"use client"
import Image from "next/image";
import { data } from "./sessionList";
import Link from "next/link";
import { useData } from "./Hooks/useData";

export default function Home() {

  const {
    sessionsLinks,
    lessonsLinks,
    questions } = useData()

  // console.log(sessionsLinks, "sessionsLinks")
  // console.log(lessonsLinks, "lessonsLinks")
  // console.log(questions, "questions")
  return (
    <>
      <div className="flex  gap-8  items-center sm:items-start" >
        {/* {data.map(e => <div key={e.sessionNumber} className="">
          <Link href={e.href}>
            {e.text}
            {e.id + 1}
          </Link>
        </div>)} */}

        <Link href={`sessions`}>sessions</Link>
        <Link href={`dictaphone`}>dictaphone</Link>
        <Link href={`الصوت`}>الصوت</Link>
      </div >
    </>
  );
}
