import Link from "next/link";
import { introduction } from "../resources/lib/data";

export default function VolumeOverview(){
    return ( <>
        <h1>Lord of the Rings</h1>
        <p> {introduction} </p>
        <h2>All volumes</h2>
        <ul>
<li><Link href="/volumes/the-fellowship-of-the-ring"> Go to "the fellowship of the ring"</Link></li>
<li><Link href="/volumes/the-two-towers"> Go to "the two towers"</Link></li>
<li><Link href="/volumes/the-return-of-the-king"> Go to "the return of the king"</Link></li>
</ul>
    
    </>
    )
}