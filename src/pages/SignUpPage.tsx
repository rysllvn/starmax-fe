import React, { useState } from "react"


export default function SignUpPage() {

    const [email,setEmail] = useState<string>("");
    const [givenName,setGivenName] = useState<string>("");
    const [surName,setSurName] = useState<string>("");
    const [password1,setPassword1] = useState<string>("");
    const [password2,setPassword2] = useState<string>("");





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

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = {
            "email": email,
            "givenName":givenName,
            "surName":surName,
            "password1":password1,
            "password2":password2
            
        }
        
        console.log(data);
         

    }
    return (
        <>
            <h1 className="text-3xl">Signup Page</h1>
            <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
               <label className="px-5" htmlFor ="email"> Email address</label>
               <input className="border-solid border-2 px-5" type ="text"id ="email"name="email" value={email} onChange={(e) => handleEmail(e)}/>
               <label className="px-5" htmlFor="given_name"> First Name</label>
               <input className="border-solid border-2 px-5" type ="text"id ="given_name"name="given_name"value={givenName} onChange={(e) => handleGivenName(e)}/>
               <label className="px-5" htmlFor="surname"> Last Name</label>
               <input className="border-solid border-2 px-5" type ="text"id ="surname"name="surname"value={surName} onChange={(e) => handleSurName(e)}/>
               <label className="px-5" htmlFor="password1"> Password</label>
               <input className="border-solid border-2 px-5" type ="password"id ="password1"name="password1"value={password1} onChange={(e) => handlePassword1(e)}/>
               <label className="px-5" htmlFor="password2"> Confirm Password</label>
               <input className="border-solid border-2 px-5" type ="password"id ="password2"name="password2"value={password2} onChange={(e) => handlePassword2(e)}/>
               <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-125">SIGNUP</button>

 



            </form>
        </>
    )
}

