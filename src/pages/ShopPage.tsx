import { useContext, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { AppStateContext } from '../utilities/Contexts';

export default function ShopPage() {
  const { items, itemsLoaded } = useContext(AppStateContext);
  const [filterIndex, setFilterIndex] = useState(-1); 

  const itemTypeSet = new Set<string>();
  items.forEach(item => itemTypeSet.add(item.itemType));
  const typeArray = Array.from(itemTypeSet);

  function handleFilter(index: number) {
    setFilterIndex(index === filterIndex ? -1 : index);
  }


  return (
    <>

    {
      itemsLoaded ?
      <>
        <TypeFilter types={typeArray} active={filterIndex} onClick={handleFilter} />
        <div className='flex flex-wrap gap-10 mt-5'>
        {
          Array.from(items.values())
          .filter((item) => {
            return filterIndex === -1 || item.itemType === typeArray[filterIndex]
          }).map((item) => <ItemCard key={item.id} item={item} />)
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
