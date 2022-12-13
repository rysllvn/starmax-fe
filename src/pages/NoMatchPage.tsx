import { useNavigate } from 'react-router-dom';

export default function NoMatchPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl mb-3'>Page Not Found</h1>
      <button className='bg-slate-100 p-4 rounded' onClick={handleBack}>Take me back</button>
    </div>
  )
}
