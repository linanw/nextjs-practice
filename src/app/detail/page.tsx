'use client';
import Link from "next/link";
import Test from "./Test";

export default async function Page() {
    return (
        <>
            <h1>Detail</h1>
            <Link href="../list">list</Link>
            <Test />
            <Test />
            <Test />
            <Test />
            <Test />
        </>
    );
}