
export default function CheckoutConfirmationPage(){

    function submitInformation(){
        console.log("Submitted");
        //Somehow push the cart to the database. Will need to clear the current cart after.
    }

    //Perhaps add the user's name to the cart to make it a bit nicer
    //NEED TO DO SOME VALIDATION. CHECK TO MAKE SURE THE CREDIT CARD EXPIRATION DATE HASN'T BEEN REACHED
    return(
        <div className="flex flex-col items-center mr-60 ml-60">
            <h1 className="font-bold text-5xl mb-5 bg-slate-200 border-2 border-slate-500 rounded-md px-4 py-2">Checkout</h1>
            <form className="grid rows-12 grid-cols-5 items-center w-full">
                <div className="row-start-1 col-start-1 col-span-2 mb-10">
                    <div className="flex flex-col">
                        <label className="px-1">First Name</label>
                        <input className="px-2 bg-slate-200 rounded-lg border border-1 border-black" placeholder="First Name"></input>
                    </div>
                </div>

                <div className="row-start-1 col-start-4 col-span-2  mb-10">
                    <div className="flex flex-col">
                        <label className="px-1">Last Name</label>
                        <input className="px-2 bg-slate-200 rounded-lg border border-1 border-black" placeholder="Last Name"></input>
                    </div>
                </div>

                <div className="row-start-2 col-start-1 col-span-5 ml-20 mr-20  mb-10">
                    <div className="flex flex-col">
                        <label className="px-1">Address</label>
                        <input className="px-2 bg-slate-200 rounded-lg border border-1 border-black" placeholder="Address"></input>
                    </div>
                </div>

                <div className="row-start-3 col-start-1 col-span-2 mr-10  mb-10">
                    <div className="flex flex-col">
                        <label className="px-1">City</label>
                        <input className="px-2 bg-slate-200 rounded-lg border border-1 border-black" placeholder="City"></input>
                    </div>
                </div>

                <div className="row-start-3 col-start-3  mb-10">
                    <div className="flex flex-col">
                        <label className="text-center">State</label>
                        <input className="px-2 bg-slate-200 rounded-lg border border-1 border-black" placeholder="State"></input>
                    </div>
                </div>

                <form className="row-start-3 col-start-5  mb-10">
                    <form className="flex flex-col">
                        <label className="px-1">Zip Code</label>
                        <input className="px-2 bg-slate-200 rounded-lg border border-1 border-black" placeholder="Zip"
                            pattern="(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)" title="Invalid Zip code">
                        </input>
                    </form>
                </form>

                <form className="row-start-4 col-start-1 col-span-2  mb-5">
                    <form className="flex flex-col">
                        <label className="px-1">Credit Card Number</label>
                        <input className="px-2 bg-slate-200 rounded-lg border border-1 border-black" placeholder="Card Num"
                            pattern="^([0-9]{4}[\s-]?){3}([0-9]{4})$" title="Invalid Credit Card. Must be 16 numbers">
                        </input>
                    </form>
                </form>

                <form className="row-start-4 col-start-4 mr-10  mb-5">
                    <form className="flex flex-col">
                        <label className="px-1">Security Num</label>
                        <input className="px-2 bg-slate-200 rounded-lg border border-1 border-black" placeholder="Security Num"
                            pattern="^[0-9]{3,4}$" title="Invalid Security Number. Must be three numbers">
                        </input>
                    </form>
                </form>

                <div className="row-start-4 col-start-5  mb-5">
                    <div className="flex flex-col">
                        <label className="px-1">Expiration Date</label>
                        <input className="px-2 bg-slate-200 rounded-lg border border-1 border-black" placeholder="Date"></input>
                    </div>
                </div>
            </form>
            <button className="bg-slate-500 text-white text-2xl font-bold rounded-md px-4 py-2 ease-out hover:scale-125 duration-300 hover:bg-green-500" 
                onClick={submitInformation}>Submit
            </button>
        </div>
    );
}