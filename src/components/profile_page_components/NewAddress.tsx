import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import eCommerce_API from '../../utilities/ApiConfig';
import { AppStateContext } from '../../utilities/Contexts';

export default function NewAddress() {
    const applicationState = useContext(AppStateContext);
    const userData = applicationState.userData;
    // addressData for adding address;
    const [street, setStreet] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [zip, setZip] = useState<string>("");
  
    function handleStreet(event: ChangeEvent<HTMLInputElement>) {
        setStreet(event.target.value);
    }
    function handleCity(event: ChangeEvent<HTMLInputElement>) {
        setCity(event.target.value);
    }
    function handleZip(event: ChangeEvent<HTMLInputElement>) {
        setZip(event.target.value);
    }
  
    async function handleSubmitAddress(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await eCommerce_API.post("/addresses", {
            "street": street,
            "city": city,
            "state": 'CA',
            "zipcode": zip,
        }, { headers: { authorization:userData?.token } })
        .then(() => {})
        .catch((e) => console.log(e.response.data.message));
    }
  return (
    <div>
    <form className="flex flex-col items-center" onSubmit={handleSubmitAddress}>
    <h1 className="text-4xl" >Address info</h1>
    <h2>Street: </h2>  
            <input type="text" id="street" name="street" placeholder="Street Address" value={street} onChange= {(e) => handleStreet(e)} />
    <h2>City:</h2> 
        {
            <input type="text" id="city" name="city" placeholder="City" value={city} onChange= {(e) => handleCity(e)} />
        }
    <h2>Zip Code:</h2>
        {
            <input type="text" id="zip" name="zip" placeholder="Zip Code" value={zip} onChange= {(e) => handleZip(e)} />
        
        }
    <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-125">Add Address</button>
    </form>
  </div>
  )
}