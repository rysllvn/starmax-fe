import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import eCommerce_API from "../utilities/ApiConfig";


export default function SignUpPage() {

    const [email,setEmail] = useState<string>("");
    const [givenName,setGivenName] = useState<string>("");
    const [surName,setSurName] = useState<string>("");
    const [password1,setPassword1] = useState<string>("");
    const [password2,setPassword2] = useState<string>("");
    const [error,setError] = useState<string>("");
    const navigate = useNavigate();

    function handleEmail(event:React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);

    }
    function handleGivenName(event:React.ChangeEvent<HTMLInputElement>) {
        setGivenName(event.target.value);

    }
    function handleSurName(event:React.ChangeEvent<HTMLInputElement>) {
        setSurName(event.target.value);

    }
    function handlePassword1(event:React.ChangeEvent<HTMLInputElement>) {
        setPassword1(event.target.value);

    }
    function handlePassword2(event:React.ChangeEvent<HTMLInputElement>) {
        setPassword2(event.target.value);

    }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await eCommerce_API.post("/user", {
            "email": email,
            "givenName":givenName,
            "surname":surName,
            "password1":password1,
            "password2":password2
        }).then((resp) => {
            setError("");
            navigate("/login")
        }).catch((e) => setError(e.response.data.message))

         

    }
    return (
        <>
            <h1 className="flex flex-col items-center text-3xl font-bold">Signup Page</h1>
            <div className="mx-auto">
                <form className="shadow-lg shadow-emerald-700 text-slate-100 bg-sky-800 flex flex-col items-center gap-5 rounded-lg mx-80 my-8 py-10 px-20" onSubmit={handleSubmit}>
                    
                    <input className="placeholder-gray-900 bg-sky-600 px-5 py-2 rounded-lg shadow-inner-lg shadow-bg-sky-900" type ="text"id ="email"name="email" placeholder="Email Address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={(e) => handleEmail(e)}/>
                    <input className="placeholder-gray-900 bg-sky-600 px-5 py-2 rounded-lg shadow-inner-lg shadow-bg-sky-900" type ="text"id ="given_name"name="given_name" placeholder="First Name" value={givenName} onChange={(e) => handleGivenName(e)}/>
                    <input className="placeholder-gray-900 bg-sky-600 px-5 py-2 rounded-lg shadow-inner-lg shadow-bg-sky-900" type ="text"id ="surname"name="surname" placeholder="Last Name" value={surName} onChange={(e) => handleSurName(e)}/>
                    <input className="placeholder-gray-900 bg-sky-600 px-5 py-2 rounded-lg shadow-inner-lg shadow-bg-sky-900" type ="password"id ="password1"name="password1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Password" value={password1} onChange={(e) => handlePassword1(e)}/>
                    <input className="placeholder-gray-900 bg-sky-600 px-5 py-2 rounded-lg shadow-inner-lg shadow-bg-sky-900" type ="password"id ="password2"name="password2" placeholder="Confirm Password" value={password2} onChange={(e) => handlePassword2(e)}/>
                    {error ? <p className="text-red-600">{error}</p>:null}

                    <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-125">SIGNUP</button>
               
                    <Link to={"/login"} className="text-slate-200 hover:text-slate-100 underline">Already registered?</Link> 
                </form>
            </div>
        </>
    )
}

