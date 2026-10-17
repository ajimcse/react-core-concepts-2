export default function Friend({friend}){
  console.log(friend)
    const {name, email, phone, username }= friend
  return(
   <div className="box">
    <h2>User Name:{username}</h2>
    <h3>Name:{name}</h3>
    <p>Email:{email}</p>
    <p>phone number:{phone}</p>
   </div>
  )
}