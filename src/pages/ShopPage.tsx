import { useContext } from 'react';
import HorizontalItemSection from '../components/HorizontalItemSection';
import { AppStateContext } from '../utilities/Contexts';

export default function ShopPage() {
  const { items, itemsLoaded } = useContext(AppStateContext);

  return (
    <>
    {
      itemsLoaded ?
      <div>
        <HorizontalItemSection items={Array.from(items.values()).slice(0, 4)} bgColor="bg-emerald-200" />
        <HorizontalItemSection items={Array.from(items.values()).slice(0, 4)} bgColor="bg-slate-200" />
        <HorizontalItemSection items={Array.from(items.values()).slice(0, 4)} bgColor="bg-slate-400" />
      </div>
      :
      <div>Loading...</div>
    }
    </>
  )
}