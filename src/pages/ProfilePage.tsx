
import { useContext } from "react"
 import { AuthContext } from "../utilities/Contexts"
export default function ProfilePage() {

const userData = useContext(AuthContext);



return (
<>
<h1 className="text-7xl">Hello {userData?.givenName}, </h1>
<div className="flex gap-80 py-20">
    <h1 className="text-4xl" >Address info</h1>
    
    <div>
      <h1 className="text-4xl"> User info</h1>
      <h2>Name: {userData?.givenName } {userData?.surname}</h2>  
      <h2>Email: {userData?.email}</h2> 
      <h2>Password: {userData?.password}</h2> 
      <h2>Card Number: {userData?.cardNumber}</h2> 
      <h2>Exp. Date: {userData?.expirationDate}</h2> 
      <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-125">Update Info</button>

    </div>
</div>
</>
)
}