import { useCallback, useState } from "react";

export default function useAnimatedList(initalListValues = []) {  
  const [items, setItems] = useState(initalListValues);
  const [pendingRemovalItemIds, setPendingRemovalItemIds] = useState([]);

  const onAnimationEnd = useCallback((id) => {
    setItems(prevState => prevState.filter(item => item.id !== id));
    setPendingRemovalItemIds(prevState => prevState.filter(itemId => itemId !== id));
  }, [])

  const onRemoveItem = useCallback((id) => {
    setPendingRemovalItemIds(prevState => [...prevState, id]);
  }, []);

  return {
    pendingRemovalItemIds,
    items,
    setItems,
    onAnimationEnd,
    onRemoveItem
  }
}