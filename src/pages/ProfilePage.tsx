import { useContext } from 'react';
import Addresses from '../components/Addresses';
import NewAddress from '../components/NewAddress';
import UpdateUserForm from '../components/UpdateUserForm';
import { AuthContext } from '../utilities/Contexts';

export default function ProfilePage() {
  const userData = useContext(AuthContext);
  return (
    <>
      <h1 className="text-5xl">Hello {userData?.givenName} </h1>
      <UpdateUserForm />
      <Addresses addresses={[]} />
      <NewAddress />
    </>
  )
}