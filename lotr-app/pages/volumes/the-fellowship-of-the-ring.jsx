import Link from "next/link";
import { volumes } from "../resources/lib/data";


export default function FellowshipOfTheRing(){
    const data = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring";
    
    return (
         <>
    <li> Go back to <Link href="../volumes"> all volumes</Link></li>
        <h1>{data.title}</h1>
        <p> </p>
        <ul>
<li></li>
<li></li>
</ul>
    </>
    )
}