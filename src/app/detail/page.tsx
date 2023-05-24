'use client';
import Link from "next/link";
import Test from "./Test";
import { Suspense } from "react";

export default async function Page() {
    return (
        <>
            <h1>Detail</h1>
            <Link href="../list">list</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Test />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Test />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Test />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Test />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Test />
            </Suspense>
        </>
    );
}