import { useContext, useEffect } from 'react';
import Addresses from '../components/profile_page_components/Addresses';
import NewAddress from '../components/profile_page_components/NewAddress';
import UpdateUserForm from '../components/profile_page_components/UpdateUserForm';
import { AppStateContext } from '../utilities/Contexts';

export default function ProfilePage() {
  const applicationState = useContext(AppStateContext)
  const userData = applicationState.userData;

  useEffect(() => {
    // eCommerce_API.get(`addresses/all/${userData.}`)
  }, [])

  console.log(userData);

  return (
    <div className='bg-slate-800 p-4 rounded-lg'>
      <h1 className="text-5xl">Hello {userData?.givenName} </h1>
      <UpdateUserForm />
      <Addresses addresses={[]} />
      <NewAddress />
    </div>
  )
}