
import React, { useContext, useState } from "react"
import eCommerce_API from "../utilities/ApiConfig";
 import { AuthContext } from "../utilities/Contexts"
 import { AddressType } from "../utilities/types";
export default function ProfilePage() {

// addressData for adding address;

const [street,setStreet] = useState<string>("");
const [changeStreetMode, setChangeStreetMode] = useState(false);
const [city,setCity] = useState<string>("");
const [changeCityMode, setChangeCityMode] = useState(false);
const [state,setState] = useState<string>("");
const [changeStateMode, setChangeStateMode] = useState(false);
const [zip,setZip] = useState<string>("");
const [changeZipMode, setChangeZipMode] = useState(false);

const address : AddressType = {
    street: street,
    city: city,
    state: state,
    zip: zip,
}

function handleStreet(event:React.ChangeEvent<HTMLInputElement>) {
    setStreet(event.target.value);

}
function handleCity(event:React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);

}
function handleState(event:React.MouseEvent<HTMLSelectElement, MouseEvent>) {
    setState(event.currentTarget.value);

}
function handleZip(event:React.ChangeEvent<HTMLInputElement>) {
    setZip(event.target.value);

}

async function handleSubmitAddress(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await eCommerce_API.post("/addresses", {
        "street": street,
        "city":city,
        "state":state,
        "zipcode":zip
        
    }).then((resp) => {
        console.log(resp);
        //navigate("/login")
    }).catch((e) => console.log(e.response.data.message))
}


//user data for changing credintials 
const userData = useContext(AuthContext);
const [givenName,setGivenName] = useState<string>(userData?.givenName ? userData.givenName : (""));
const [changeGivenNameMode, setChangeGivenNameMode] = useState(false);
const [surname,setSurname] = useState<string>(userData?.surname ? userData.surname : (""));
const [changeSurnameMode, setChangeSurnameMode] = useState(false);
const [email,setEmail] = useState<string>(userData?.email  ? userData.email : (""));
const [changeEmailMode, setChangeEmailMode] = useState(false);
const [cardNumber,setCardNumber] = useState<string>("");
const [changeCardNumberMode, setChangeCardNumberMode] = useState(false);
const [expirationDate,setExpirationDate] = useState<string>("");
const [changeExpirationDateMode, setChangeExpirationDateMode] = useState(new Date);


function handleCardNumber(event:React.ChangeEvent<HTMLInputElement>) {
    setCardNumber(event.target.value);
    console.log(event.target.value);
}
function handleGivenName(event:React.ChangeEvent<HTMLInputElement>) {
    setGivenName(event.target.value);

}
function handleSurName(event:React.ChangeEvent<HTMLInputElement>) {
    setSurname(event.target.value);

}

function handleEmail(event:React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

}




async function handleSubmitUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await eCommerce_API.patch("/user", {
        "email": email,
        "givenName":givenName,
        "surname":surname,
        "cardNumber":cardNumber,
        "expirationDate":expirationDate
    }).then((resp) => {
        console.log(resp);
        //navigate("/login")
    }).catch((e) => console.log(e.response.data.message))
}

return (
<>
<h1 className="text-7xl">Hello {userData?.givenName}, </h1>
<div className="flex gap-80 py-20">
    <div>
        <form className="flex flex-col items-center" onSubmit={handleSubmitAddress}>
        <h1 className="text-4xl" >Address info</h1>
        <h2>Street: </h2>  
            {
                <input type="text" id="street" name="street" placeholder="Street Address" value={street} onChange= {(e) => handleStreet(e)} />
            
            }
        <h2>City:</h2> 
            {
                <input type="text" id="city" name="city" placeholder="City" value={city} onChange= {(e) => handleCity(e)} />
            
            }
        <h2>State:</h2> 
            {
            <select name="state" onClick={(e) =>handleState(e)}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            
            }
        <h2>Zip Code:</h2>
            {
                <input type="text" id="zip" name="zip" placeholder="Zip Code" value={zip} onChange= {(e) => handleZip(e)} />
            
            }
        <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-125">Add Address</button>
        </form>

        <div>
            {/* holds all addresses for user*/}
        </div>
    </div>
    
    
    
    {/*Update USER */} 
    
    <div>
      <h1 className="text-4xl"> User info</h1>
      
      <form className="flex flex-col items-center" onSubmit={handleSubmitUser}>
      {/* First Name Changing */}  
      <h2 className="flex text-xl font-bold">First Name: </h2>
            {
                changeGivenNameMode 
                ? 
                <input className="flex " type ="text"id ="given_name"name="given_name" placeholder="First Name" value={givenName} onChange={(e) => handleGivenName(e)}/> 
                : 
                <div onClick={()=> setChangeGivenNameMode(true) }>{userData?.givenName}</div>
            }
      {/* Last Name Changing */}
      <h2 className="flex text-xl font-bold">Last Name: </h2>
            {
                changeSurnameMode 
                ? 
                <input className="flex bg-slate-100 text-emerald-300" type="text"  value={surname} onChange={(e) => handleSurName(e) }/> 
                : 
                <div onClick={()=> setChangeSurnameMode(true) }>{userData?.surname}</div>
            }
        {/* Email Changing */}
        <h2 className="flex text-xl font-bold">Email: </h2>
            {
                changeEmailMode 
                ? 
                <input className="flex " type="text" onChange={(e) => handleEmail(e) } value={email}/> 
                : 
                <div onClick={()=> setChangeEmailMode(true) }>{userData?.email}</div>
            }
        {/* Card Number Changing */}
        <h2 className="flex text-xl font-bold">Card Number: </h2>
            {
                <input  type ="text" pattern="[0-9]{13,16}" onChange={(e)=> handleCardNumber(e)} value={userData?.cardNumber}/>
            }
        {/* Exp. Date Changing  */} 
            <h2 className="flex text-xl font-bold">Expiration Date: </h2>
            {
                <input type="month" onClick={()=> setChangeExpirationDateMode(new Date) }>{userData?.expirationDate}</input>
            }
      <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-125">Update Info</button>
    </form>
    </div>
</div>
</>
)
}