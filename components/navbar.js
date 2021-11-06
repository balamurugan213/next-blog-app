import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
    <nav>
        <div className="logo">
        <Image src='/hamlet_logo.png' width={128} height={128} alt="logo"/>
        </div>
        <Link href="/"><a >Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/service"><a>Service</a></Link>
        <Link href="/users"><a>Users</a></Link>

    </nav> );
}

export default Navbar;