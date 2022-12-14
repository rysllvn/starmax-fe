import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleEmail(event:React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);

    }

    function handlePassword(event:React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);

    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = {
            "email": email,
            "password":password,     
        }
        
        console.log(data);
    }
    return(

        <div>
        <h1 className="flex flex-col items-center text-3xl font-bold">Login Page</h1>
        <form className="bg-emerald-300 flex flex-col items-center gap-5 rounded-lg mx-40 my-8 py-5" onSubmit={handleSubmit}>
               <input className="bg-emerald-100 border-solid border-2 px-5 py-2 rounded-lg" type ="text"id ="email"name="email" placeholder="Email Address" value={email} onChange={(e) => handleEmail(e)}/>
               
               <input className="bg-emerald-100 border-solid border-2 px-5 py-2 rounded-lg" type ="password"id ="password"name="password" placeholder="Password" value={password} onChange={(e) => handlePassword(e)}/>
            
               <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-125">LOGIN</button>
               <Link to={"/signup"} className="text-blue-700 underline">Create new account</Link>

 



            </form>
            </div>
    )
}