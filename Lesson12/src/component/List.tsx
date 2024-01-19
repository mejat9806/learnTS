//generic T here work like a variable for TYPE

import { ReactNode } from "react";

interface ListProps<generic> {
  items: generic[];
  render: (item: generic) => ReactNode;
}
function List<generic>({ items, render }: ListProps<generic>) {
  //the type placeholder <generic> allows your List function to adapt to different data types, making it more versatile and reusable in various scenarios.this the <generic>
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
}

export default List;
