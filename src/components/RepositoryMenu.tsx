import { useEffect } from "react";

import useIterator from "./hooks/useIterator.tsx";

export default function RepositoryMenu({ repositories, onSelect = (f) => f }) {
  const [item, previous, next] = useIterator(repositories);

  useEffect(() => {
    if (!item) return; // Handle the case where 'item' is undefined or falsy
    onSelect(item.name);
  }, [item]);

  if (!item) {
    return <div>No repositories available</div>; // Display a message for empty items
  }

  return (
    <div style={{ display: "flex" }}>
      <button onClick={previous}>&lt;</button>
      <p>{item.name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  );
}
