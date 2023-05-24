'use client'
// import { useRouter } from 'next/navigation';

import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Home() {
    // const router = useRouter();

    return (
        <>
            <h1>{new Date().toISOString()}</h1>
            {/* <Button onClick={() => router.push("../detail")}>Detail</Button><br /> */}

            <Link href="../detail">detail</Link>
        </>
    );
}