'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function Page() {
    const router = useRouter();
    const [items, setItems] = useState(['head']);
    const [count, setCount] = useState(0);

    const addItems = () => {
        const newItems = [...items];
        for (let i = 0; i < 5; i++) {
            newItems.push(`Item ${newItems.length}`);
        }
        setItems(newItems);
    };

    useEffect(() => {
        addItems();
    }, []);


    const getList = (items: string[]) => {
        const itemLines = [];
        console.log(items.length);
        for (let i = 0; i < items.length; i++) {
            itemLines.push(<li key={i}><Link href={`/dashboard/Item/${i}`}> {items[i]}</Link></li >);
        }
        return itemLines;
    }
    return <>        <h1>Detail</h1>
        <Button onClick={addItems}>Add Items</Button><br />
        {count}<br />
        <Button onClick={() => setCount(count + 1)}>Add count</Button><br />
        <ul>
            {getList(items)}
        </ul ></>
}