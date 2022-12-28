import { useState } from 'react'
import { ItemTypeT } from '../utilities/types';

const options = ['Clothing', 'Vehicles', 'Electronics'];


export default function NewItem({ onAddItem }: { onAddItem: Function }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [msrp, setMsrp] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [type, setType] = useState<ItemTypeT>('Clothing');

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
    <div className='mt-8'>
      <h2>Add New Item</h2>
      <form
        className='flex flex-col max-w-2xl mx-auto gap-4'
        onSubmit={handleAddItem}
      >
        <label className='flex justify-between'>Name: 
          <input
            className='w-full'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='flex justify-between'>Description
          <textarea
            className='w-full'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label className='flex justify-between'>Stock
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(parseFloat(e.target.value))}
          />
        </label>
        <label className='flex justify-between'>MSRP 
          <input
            type="number"
            value={msrp}
            onChange={(e) => setMsrp(parseFloat(e.target.value))}
          />
        </label>
        <label className='flex justify-between'>Current Price
          <input
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(parseFloat(e.target.value))}
          />
        </label>
        <label className='flex justify-between'>Type
          <select
            value={type}
            onChange={e => setType(e.target.value as ItemTypeT)}
          >
            {options.map(option => <option key={option} value={option}>{option}</option>)}
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
