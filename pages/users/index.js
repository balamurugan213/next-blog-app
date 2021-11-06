
import style from '../../styles/User.module.css'
import Link from 'next/link';


export const getStaticProps=async()=>{
   const res =await fetch('https://jsonplaceholder.typicode.com/users');

   const data=await res.json();
   return {
      props:{
         users:data,
      }
   }
}

const Users = ({users}) => {
   return (
      <div className="users">
         <h1>All users</h1>
         {
            users.map(user=>(
               <Link className="users" href={'/users/'+user.id} key={user.id}>
                  <a href="" className={style.single}><h3>{user.name}</h3></a>
               </Link>
            ))
         }
      </div>

   );
}

export default Users;