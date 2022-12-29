import { useContext, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { AppStateContext } from '../utilities/Contexts';

export default function ShopPage() {
  const { items, itemsLoaded } = useContext(AppStateContext);
  const [filterIndex, setFilterIndex] = useState(-1); 

  const itemTypeSet = new Set<string>();
  items.forEach(item => itemTypeSet.add(item.itemType));

  function handleFilter(index: number) {
    setFilterIndex(index === filterIndex ? -1 : index);
  }


  return (
    <>

    {
      itemsLoaded ?
      <>
        <TypeFilter types={Array.from(itemTypeSet)} active={filterIndex} onClick={handleFilter} />
        <div className='flex w-5/6 flex-wrap gap-10 mt-5'>
        {
          Array.from(items.values()).map((item) => <ItemCard key={item.id} item={item} />)
        }
        </div>
      </>
      :
      <div>Loading...</div>
    }
    </>
  )
}

function TypeFilter({ types, active, onClick }: { types: string[]; active: number; onClick: Function }) {
  return (
    <div className='flex gap-3'>
      {types.map((type, idx) => {
        return <button
                  key={type}
                  onClick={() => onClick(idx)}
                  className={`p-2  rounded-xl ${active === idx ? 'bg-emerald-700' : 'bg-slate-700'}`}
                >
                  {type}
                </button>
      })}
    </div>
  )
}
