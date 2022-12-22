import { ItemType } from './types';

export const convertItemArrayToMap = (items: ItemType[]) => {
  const map = new Map<string, ItemType>();
  items.forEach(item => {
    map.set(item.id!, item);
  });
  return map;
};