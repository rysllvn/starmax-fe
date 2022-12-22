import { 
  ChangeEvent, 
  FormEvent,
  useContext, 
  useState,
} from 'react';

import eCommerce_API from "../utilities/ApiConfig";
import { AppStateContext } from "../utilities/Contexts";

export default function UpdateUserForm() {
  //user data for changing credintials 
  const applicationState = useContext(AppStateContext);
  const userData = applicationState.userData;
  const [givenName,setGivenName] = useState<string>(userData?.givenName || "");
  const [changeGivenNameMode, setChangeGivenNameMode] = useState(false);
  const [surname,setSurname] = useState<string>(userData?.surname || "");
  const [changeSurnameMode, setChangeSurnameMode] = useState(false);
  const [email,setEmail] = useState<string>(userData?.email || "");
  const [cardNumber,setCardNumber] = useState<string>("");
  const [expirationDate,setExpirationDate] = useState<string | null>(null);

  function handleCardNumber(event: ChangeEvent<HTMLInputElement>) {
      setCardNumber(event.target.value);
  }
  function handleGivenName(event: ChangeEvent<HTMLInputElement>) {
      setGivenName(event.target.value);
  }
  function handleSurName(event: ChangeEvent<HTMLInputElement>) {
      setSurname(event.target.value);
  }

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
      setEmail(event.target.value);
  }

  function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
      setExpirationDate((event.target.value));
  }

  async function handleSubmitUser(event:  FormEvent<HTMLFormElement>) {
      event.preventDefault();
      //console.log(email,givenName,surname,cardNumber,expirationDate);
      await eCommerce_API.put("/user", {
          "newEmail": email,
          "newGivenName":givenName,
          "newSurname":surname,
          "newCardNumber":cardNumber,
          "newExpirationDate":expirationDate
      },{
          "headers": {
              authorization:userData?.token
          }
      }).then(() => {
      }).catch((e: { response: { data: { message: any; }; }; }) => {
        console.log(e.response.data.message);
      });
  }

  return (
    <>
      <div className="flex gap-80 py-20">
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
          <h2 className="flex text-xl font-bold">Last Name: </h2>
                {
                    changeSurnameMode 
                    ? 
                    <input className="flex bg-slate-100 text-emerald-300" type="text"  value={surname} onChange={(e) => handleSurName(e) }/> 
                    : 
                    <div onClick={()=> setChangeSurnameMode(true) }>{userData?.surname}</div>
                }
            <h2 className="flex text-xl font-bold">Email: </h2>
                    <input className="flex " type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={(e) => handleEmail(e) } value={email}/>
            <h2 className="flex text-xl font-bold">Card Number: </h2>
                {
                    <input  type ="text" pattern="[0-9]{13,16}" onChange={(e)=> handleCardNumber(e)} value={userData?.cardNumber}/>
                }
            {/* Exp. Date Changing  */} 
                <h2 className="flex text-xl font-bold">Expiration Date: </h2>
                {
                    <input type="month" onChange={handleDateChange} value = {userData?.expirationDate}></input>
                }
          <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-125">Update Info</button>
        </form>
        </div>
      </div>
    </>
  )
}