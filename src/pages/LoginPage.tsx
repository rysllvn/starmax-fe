import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import eCommerce_API from "../utilities/ApiConfig";
import { DispatchContext } from "../utilities/Contexts";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error,setError] = useState<string>("");
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);

    function handleEmail(event:React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);

    }

    function handlePassword(event:React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);

    }

     async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
       await eCommerce_API.post("/auth",{
            "email": email,
            "password":password     
        }).then((resp) => {
            setError("");
            //console.log(resp);
            dispatch({type: "setUserData", userData: resp.data})
            navigate("/");
        })
          .catch((e) => setError(e.response.data.message));
        
        
        
    }
    return(

        <>
        <h1 className="flex flex-col items-center text-3xl font-bold">Login Page</h1>
        <div className="mx-60">
        <form className="bg-emerald-300 flex flex-col items-center gap-5 rounded-lg mx-80 my-8 py-5 px-10" onSubmit={handleSubmit}>
               <input className="bg-emerald-100 border-solid border-2 px-5 py-2 rounded-lg" type ="text"id ="email"name="email" placeholder="Email Address" value={email} onChange={(e) => handleEmail(e)}/>
               
               <input className="bg-emerald-100 border-solid border-2 px-5 py-2 rounded-lg" type ="password"id ="password"name="password" placeholder="Password" value={password} onChange={(e) => handlePassword(e)}/>
               {error ? <p className="text-red-600">{error}</p>:null}            

               <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-125">LOGIN</button>
               <Link to={"/signup"} className="text-blue-700 underline">Create new account</Link>

 



            </form>
            </div>
            </>
    )
}