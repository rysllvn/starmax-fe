import { useState } from 'react'

const options = ['Clothing', 'Vehicles', 'Electronics'];


export default function NewItem({ onAddItem }: { onAddItem: Function }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [msrp, setMsrp] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [type, setType] = useState<string>('Clothing');

  function handleAddItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddItem({ name, stock, msrp, currentPrice, type, description });
    // reset
    setName('');
    setStock(0);
    setMsrp(0);
    setCurrentPrice(0);
    setType('Clothing');
  }

  function disableButton() {
    if (name.length === 0) return true;
    if (stock <= 0) return true;
    if (msrp <= 0) return true;
    if (currentPrice <= 0) return true;
    return false;
  }

  return (
    <div className='mt-8 border-solid border-slate-900 rounded border-4 max-w-fit p-4'>
      <h2 className='text-3xl mb-3'>Add New Item</h2>
      <form
        className='flex flex-col max-w-2xl gap-4'
        onSubmit={handleAddItem}
      >
        <label className='flex justify-between'>Name: 
          <input
            className='w-full bg-slate-600'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='flex justify-between p-4'>Description
          <textarea
            className='w-full bg-slate-600'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label className='flex justify-between px-4'>Stock
          <input
            className='bg-slate-600 p-4'
            type="number"
            value={stock}
            onChange={(e) => setStock(parseFloat(e.target.value))}
          />
        </label>
        <label className='flex justify-between'>MSRP 
          <input
            className='bg-slate-600 p-4'
            type="number"
            value={msrp}
            onChange={(e) => setMsrp(parseFloat(e.target.value))}
          />
        </label>
        <label className='flex justify-between'>Current Price
          <input
            className='bg-slate-600 p-4'
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(parseFloat(e.target.value))}
          />
        </label>
        <label className='flex justify-between'>Type
          <select
            className='bg-slate-600 p-4'
            value={type}
            onChange={e => setType(e.target.value)}
          >
            {options.map(option => <option className='bg-slate-600 p-4' key={option} value={option}>{option}</option>)}
          </select>
        </label>
        
        <button
          className='bg-slate-400'
          disabled={disableButton()}
        >
          Add
        </button>
      </form>
    </div>
  )
}
