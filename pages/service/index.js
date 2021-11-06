import Link from 'next/link'


const Service = () => {
    return ( 
    <div className="">
        <ul>
            <li><Link href="service/python"><a>Python</a></Link></li> 
            <li><Link href="/"><a >Javascript</a></Link></li>
        </ul>
    </div> );
}

export default Service;