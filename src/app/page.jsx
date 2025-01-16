"use client"
import Image from "next/image";
import { data } from "./sessionList";
import Link from "next/link";

export default function Home() {

  // let arr = JSON.parse(data)
  console.log(data)
  return (
    <>
      <div div className="flex  gap-8  items-center sm:items-start" >
        {data.map(e => <div key={e.sessionNumber} className="">
          <Link href={e.href}>
            {e.text}
            {e.id + 1}
          </Link>
        </div>)}

        <Link href={`dictaphone`}>dictaphone</Link>
      </div >
    </>
  );
}
