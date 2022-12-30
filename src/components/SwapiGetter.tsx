import axios from 'axios'
import { useState } from 'react';

export function SwapiGetter() {
  const [results, setResults] = useState<any>([]);
  const [resultIndex, setResultIndex] = useState(0);
  function handleFindStarships() {
    axios.get('https://swapi.dev/api/starships')
    .then((response) => {
      setResults(response.data.results);
    })
  }

  function handleFindVehicles() {
    axios.get('https://swapi.dev/api/vehicles')
    .then((response) => {
      setResults(response.data.results);
    })
  }

  return (
    <div>
      <h2 className='text-2xl mt-10'>Browse items to add to our inventory here</h2>
      <div>
        <button
          className='bg-green-800 p-4 rounded-lg m-8'
          onClick={handleFindStarships}>Browse Starships</button>
        <button
          className='bg-green-800 p-4 rounded-lg'
          onClick={handleFindVehicles}>Browse Vehicles</button>
      </div>
      <div>
        <button
          className='bg-green-800 p-4 rounded-lg m-8'
          disabled={resultIndex === 0}
          onClick={() => setResultIndex(resultIndex - 1)}>Previous</button>
        <button
          className='bg-green-800 p-4 rounded-lg'
          disabled={resultIndex >= results.length - 1}
          onClick={() => setResultIndex(resultIndex + 1)}>Next</button>
      </div>
      
      
      {
        results.length > 0 && 
        <div className='border-solid border-slate-400 border-2 p-4 rounded m-8 w-3/4'>
          {Object.keys(results[resultIndex]).map(key => {
            return (
              <div key={key} className='flex justify-between'>
                <div>{key}:</div>
                <div>{results[resultIndex][key]}</div>
               </div>
            )
          })}
        </div>
      }
    </div>
  )
}
