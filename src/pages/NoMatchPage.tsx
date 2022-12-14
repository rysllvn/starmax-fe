import { useNavigate } from 'react-router-dom';

import './NoMatchPage.css';

export default function NoMatchPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div id="no-match-container" className='h-full flex flex-col items-center p-48'>
      <h1 className='bg-slate-100 p-8 text-3xl mb-3 rounded'>404: These aren't the droids you're looking for (page not found)</h1>
      <button className='bg-emerald-300 p-4 rounded text-3xl' onClick={handleBack}>Take me back</button>
    </div>
  )
}
