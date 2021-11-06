import { useRouter } from 'next/router'
import Link from 'next/link'
import {useEffect} from 'react'

const NotFound = () => {
   const router =useRouter();

   useEffect(() => {
      setTimeout(()=>{
         router.push('/')
      },3000)
   }, [])

   return (
      <div className="not-found">
         <h1>Ooops...</h1>
         <h2>That Page cannot be found :)</h2>
         <p>Go Nsck yo <Link href='/'><a>Homepage</a></Link></p>
      </div>
   );
}

export default NotFound;